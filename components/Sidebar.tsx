
import React, { useState } from 'react';
import { Topic } from '../types';
import { FolderPlus, Plus, ChevronUp, ChevronDown, ArrowUp, ArrowDown, Trash2, CheckCircle, GripVertical, CalendarDays, BrainCircuit } from 'lucide-react';

interface SidebarProps {
    topics: Topic[];
    currentLessonId: number | string | null;
    onSelectLesson: (id: number | string) => void;
    onAddLesson: () => void;
    onAddTopic: () => void;
    onOpenAiImport: () => void;
    onDeleteLesson: (id: number | string) => void;
    onMoveLesson: (id: number | string, direction: -1 | 1) => void;
    onMoveTopic: (topicIndex: number, direction: -1 | 1) => void;
    onReorderLesson: (sourceLessonId: string | number, targetTopicIndex: number, targetLessonIndex: number) => void;
    onReorderTopic: (sourceIndex: number, targetIndex: number) => void;
}

// Biến global để theo dõi trạng thái drag xuyên suốt các lần render
let activeDragPayload: { type: 'lesson' | 'topic', id: string | number } | null = null;

const Sidebar: React.FC<SidebarProps> = ({ 
    topics, 
    currentLessonId, 
    onSelectLesson, 
    onAddLesson, 
    onAddTopic, 
    onOpenAiImport,
    onDeleteLesson, 
    onMoveLesson,
    onMoveTopic,
    onReorderLesson,
    onReorderTopic
}) => {
    // State để hiển thị đường kẻ feedback khi kéo thả
    const [dropTarget, setDropTarget] = useState<{ type: 'lesson' | 'topic', id: string | number | number, position: 'top' | 'bottom' | 'inside' } | null>(null);

    const totalLessons = topics.reduce((acc, topic) => acc + topic.lessons.length, 0);

    const handleDragStart = (e: React.DragEvent, type: 'lesson' | 'topic', id: string | number) => {
        activeDragPayload = { type, id };
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", JSON.stringify({ type, id }));
        
        // Tạo ảnh mờ khi bắt đầu kéo
        const target = e.currentTarget as HTMLElement;
        setTimeout(() => {
            target.classList.add('opacity-40', 'bg-slate-100');
        }, 0);
    };

    const handleDragEnd = (e: React.DragEvent) => {
        const target = e.currentTarget as HTMLElement;
        target.classList.remove('opacity-40', 'bg-slate-100');
        activeDragPayload = null;
        setDropTarget(null);
    };

    const handleDragOverLesson = (e: React.DragEvent, lessonId: string | number) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "move";

        if (!activeDragPayload || activeDragPayload.type !== 'lesson') return;
        if (String(activeDragPayload.id) === String(lessonId)) return;

        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        const position = e.clientY < midY ? 'top' : 'bottom';
        
        if (dropTarget?.id !== lessonId || dropTarget?.position !== position) {
            setDropTarget({ type: 'lesson', id: lessonId, position });
        }
    };

    const handleDragOverTopic = (e: React.DragEvent, topicIndex: number) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "move";
        
        if (!activeDragPayload) return;

        if (activeDragPayload.type === 'topic') {
            if (Number(activeDragPayload.id) === topicIndex) return;
            const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
            const midY = rect.top + rect.height / 2;
            const position = e.clientY < midY ? 'top' : 'bottom';
            
            if (dropTarget?.id !== topicIndex || dropTarget?.position !== position) {
                setDropTarget({ type: 'topic', id: topicIndex, position });
            }
        } else if (activeDragPayload.type === 'lesson') {
            // Cho phép thả bài học "vào trong" một topic trống hoặc vào header của topic
            if (dropTarget?.id !== topicIndex || dropTarget?.position !== 'inside') {
                setDropTarget({ type: 'topic', id: topicIndex, position: 'inside' });
            }
        }
    };

    const handleDrop = (e: React.DragEvent, targetTopicIndex: number, targetLessonIndex?: number) => {
        e.preventDefault();
        e.stopPropagation();

        if (!activeDragPayload) return;

        if (activeDragPayload.type === 'lesson') {
            const sourceId = activeDragPayload.id;
            
            if (targetLessonIndex !== undefined) {
                // Thả lên một bài học khác
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                const midY = rect.top + rect.height / 2;
                const position = e.clientY < midY ? 'top' : 'bottom';
                
                const insertIndex = position === 'top' ? targetLessonIndex : targetLessonIndex + 1;
                onReorderLesson(sourceId, targetTopicIndex, insertIndex);
            } else {
                 // Thả vào tiêu đề Topic hoặc Topic trống -> chèn vào đầu danh sách
                 onReorderLesson(sourceId, targetTopicIndex, 0);
            }
        } else if (activeDragPayload.type === 'topic') {
            if (targetLessonIndex === undefined) {
                 const sourceIndex = Number(activeDragPayload.id);
                 const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                 const midY = rect.top + rect.height / 2;
                 const position = e.clientY < midY ? 'top' : 'bottom';
                 
                 let targetIndex = targetTopicIndex;
                 if (position === 'bottom') targetIndex += 1;
                 
                 if (sourceIndex !== targetIndex) {
                     onReorderTopic(sourceIndex, targetIndex);
                 }
            }
        }
        setDropTarget(null);
    };

    const renderSemester = (semester: number, label: string) => {
        return (
            <div className="mb-4">
                <div 
                    className="px-4 py-3 bg-slate-50 border-y border-slate-100 flex items-center gap-2 sticky top-0 z-10 select-none"
                    onDragOver={(e) => e.preventDefault()}
                >
                    <CalendarDays size={14} className="text-teal-600" />
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</h3>
                </div>
                
                {topics.map((topic, originalIdx) => {
                    if ((topic.semester || 1) !== semester) return null;
                    
                    const isTopicDropTarget = dropTarget?.type === 'topic' && dropTarget.id === originalIdx;
                    const dropPos = isTopicDropTarget ? dropTarget?.position : null;

                    return (
                        <div key={originalIdx} className="relative" onDragOver={(e) => e.preventDefault()}>
                            {/* Feedback đường kẻ khi kéo Topic */}
                            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-teal-500 z-30 pointer-events-none transition-opacity duration-100 ${dropPos === 'top' ? 'opacity-100' : 'opacity-0'}`}></div>
                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 z-30 pointer-events-none transition-opacity duration-100 ${dropPos === 'bottom' ? 'opacity-100' : 'opacity-0'}`}></div>
                            
                            <div 
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, 'topic', originalIdx)}
                                onDragEnd={handleDragEnd}
                                onDragOver={(e) => handleDragOverTopic(e, originalIdx)}
                                onDrop={(e) => handleDrop(e, originalIdx)}
                                className={`px-4 py-2 flex justify-between items-center group cursor-grab active:cursor-grabbing transition-colors border-t border-transparent relative select-none
                                    ${isTopicDropTarget && dropPos === 'inside' ? 'bg-teal-50 border-teal-500 border-dashed border' : 'hover:bg-slate-100'}`}
                            >
                                <div className="flex items-center gap-2 overflow-hidden w-full pointer-events-none">
                                     <GripVertical size={12} className="text-slate-300 shrink-0" />
                                     <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight truncate w-full" title={topic.topic}>
                                        {topic.topic}
                                    </span>
                                </div>
                                <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 bg-white/80 backdrop-blur-sm rounded">
                                    <button type="button" onClick={(e) => { e.stopPropagation(); onMoveTopic(originalIdx, -1); }} className="text-slate-400 hover:text-teal-700 hover:bg-slate-200 p-1 rounded"><ChevronUp size={12} /></button>
                                    <button type="button" onClick={(e) => { e.stopPropagation(); onMoveTopic(originalIdx, 1); }} className="text-slate-400 hover:text-teal-700 hover:bg-slate-200 p-1 rounded"><ChevronDown size={12} /></button>
                                </div>
                            </div>
                            
                            <div className={`transition-all ${isTopicDropTarget && dropPos === 'inside' ? 'bg-teal-50/50 pb-2' : ''}`}>
                                {topic.lessons.map((lesson, lessonIndex) => {
                                    const isActive = String(lesson.id) === String(currentLessonId);
                                    const hasEvidence = lesson.mappings && Object.keys(lesson.mappings).length > 0;
                                    
                                    const isLessonDropTarget = dropTarget?.type === 'lesson' && String(dropTarget.id) === String(lesson.id);
                                    const dropPosLesson = isLessonDropTarget ? dropTarget?.position : null;
                                    
                                    return (
                                        <div 
                                            key={lesson.id}
                                            draggable="true"
                                            onDragStart={(e) => handleDragStart(e, 'lesson', lesson.id)}
                                            onDragEnd={handleDragEnd}
                                            onDragOver={(e) => handleDragOverLesson(e, lesson.id)}
                                            onDrop={(e) => handleDrop(e, originalIdx, lessonIndex)}
                                            className={`relative transition-all duration-75 border-l-[3px] flex group select-none
                                                ${isActive ? 'bg-teal-50 border-l-teal-600 shadow-[inset_4px_0_0_#0d9488]' : 'border-l-transparent hover:bg-slate-50'}`}
                                        >
                                            {/* Feedback đường kẻ khi kéo Bài học */}
                                            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-teal-500 z-30 pointer-events-none transition-opacity duration-75 ${dropPosLesson === 'top' ? 'opacity-100' : 'opacity-0'}`}></div>
                                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 z-30 pointer-events-none transition-opacity duration-75 ${dropPosLesson === 'bottom' ? 'opacity-100' : 'opacity-0'}`}></div>

                                            <div className="flex items-center pl-1 cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 group-hover:text-slate-400">
                                                <GripVertical size={14} />
                                            </div>
                                            <div onClick={() => onSelectLesson(lesson.id)} className="flex-grow py-2.5 pl-1 pr-2 cursor-pointer overflow-hidden">
                                                <div className={`text-sm leading-tight mb-0.5 truncate transition-colors ${isActive ? 'text-teal-800 font-bold' : 'text-slate-600'}`}>
                                                    {lesson.title}
                                                </div>
                                                {hasEvidence && (
                                                    <div className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded-full bg-teal-100 border border-teal-200">
                                                        <CheckCircle size={10} className="text-teal-600" />
                                                        <span className="text-[8px] font-black text-teal-700 uppercase tracking-tighter whitespace-nowrap">Đã tích hợp</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className={`flex flex-col gap-1 items-end justify-start py-2 pr-2 shrink-0 z-10 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                                <div className="flex gap-0.5">
                                                    <button type="button" onClick={(e) => { e.stopPropagation(); onMoveLesson(lesson.id, -1); }} className="text-slate-400 hover:text-teal-600 hover:bg-slate-200 p-1 rounded"><ArrowUp size={12} /></button>
                                                    <button type="button" onClick={(e) => { e.stopPropagation(); onMoveLesson(lesson.id, 1); }} className="text-slate-400 hover:text-teal-600 hover:bg-slate-200 p-1 rounded"><ArrowDown size={12} /></button>
                                                </div>
                                                <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDeleteLesson(lesson.id); }} className="text-slate-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded mt-1"><Trash2 size={15} /></button>
                                            </div>
                                        </div>
                                    );
                                })}
                                {/* Vùng cho phép thả vào một Topic rỗng */}
                                {topic.lessons.length === 0 && (
                                    <div 
                                        className="h-10 border-2 border-dashed border-slate-100 rounded m-2 flex items-center justify-center text-[10px] text-slate-300 transition-colors hover:border-teal-300 hover:bg-teal-50/50"
                                        onDragOver={(e) => handleDragOverTopic(e, originalIdx)}
                                        onDrop={(e) => handleDrop(e, originalIdx)}
                                    >
                                        Thả bài học vào đây
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col z-20 shadow-[8px_0_32px_rgba(0,0,0,0.03)] h-full transition-all duration-300">
            <div className="p-5 border-b border-slate-100 bg-white flex justify-between items-center flex-none">
                <div>
                    <h2 className="text-[10px] font-black text-teal-600 uppercase tracking-widest">Danh mục bài học</h2>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-bold">TỔNG CỘNG: {totalLessons} TIẾT</div>
                </div>
                <div className="flex gap-1.5">
                    <button 
                        onClick={onOpenAiImport}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-50 border border-violet-100 text-violet-600 hover:bg-violet-600 hover:text-white shadow-sm transition-all" 
                        title="AI Import Chương trình"
                    >
                        <BrainCircuit size={16} />
                    </button>
                    <button 
                        type="button"
                        onClick={onAddTopic}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-teal-600 hover:border-teal-500 transition-all" 
                        title="Thêm Chủ đề"
                    >
                        <FolderPlus size={16} />
                    </button>
                    <button 
                        type="button"
                        onClick={onAddLesson}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-600 text-white hover:bg-teal-700 shadow-md transition-all active:scale-95" 
                        title="Thêm Bài học"
                    >
                        <Plus size={18} />
                    </button>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto custom-scroll pb-20 select-none">
                {renderSemester(1, "Học kỳ I")}
                {renderSemester(2, "Học kỳ II")}
            </div>
        </aside>
    );
};

export default Sidebar;
