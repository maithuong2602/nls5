
import { Competency, CurriculumData, Topic } from './types';

export const COMPETENCIES_TC1: Competency[] = [
    { code: "1.1.TC1a", text: "Giải thích được nhu cầu thông tin." },
    { code: "1.1.TC1b", text: "Thực hiện được rõ ràng và theo quy trình các tìm kiếm để tìm dữ liệu, thông tin và nội dung trong môi trường số." },
    { code: "1.1.TC1c", text: "Giải thích được cách truy cập và điều hướng các kết quả tìm kiếm." },
    { code: "1.1.TC1d", text: "Giải thích được rõ ràng và theo quy trình chiến lược tìm kiếm." },
    { code: "1.2.TC1a", text: "Thực hiện phân tích, so sánh, đánh giá được độ tin cậy và độ chính xác của các nguồn dữ liệu, thông tin và nội dung số đã được tổ chức rõ ràng." },
    { code: "1.2.TC1b", text: "Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số được xác định rõ ràng." },
    { code: "1.3.TC1a", text: "Lựa chọn được dữ liệu, thông tin và nội dung để tổ chức, lưu trữ và truy xuất chúng một cách thường xuyên trong môi trường số." },
    { code: "1.3.TC1b", text: "Sắp xếp được chúng một cách trật tự trong một môi trường có cấu trúc." },
    { code: "2.1.TC1a", text: "Thực hiện được các tương tác được xác định rõ ràng và thường xuyên with các công nghệ số." },
    { code: "2.1.TC1b", text: "Lựa chọn được các phương tiện giao tiếp số phù hợp, được xác định rõ ràng cho phù hợp với bối cảnh nhất định." },
    { code: "2.2.TC2a", text: "Lựa chọn các công nghệ số phù hợp được xác định rõ để trao đổi dữ liệu, thông tin và nội dung số." },
    { code: "2.2.TC2b", text: "Giải thích cách thức hoạt động như một trung gian để chia sẻ thông tin và nội dung thông qua các công nghệ kỹ thuật số được xác định rõ ràng và thường xuyên." },
    { code: "2.2.TC2c", text: "Minh họa rõ ràng và thường xuyên các phương pháp tham chiếu và ghi chú nguồn." },
    { code: "2.3.TC1a", text: "Lựa chọn được các dịch vụ số được xác định rõ ràng và phổ biến để tham gia vào xã hội." },
    { code: "2.3.TC1b", text: "Xác định được các công nghệ số rõ ràng và thích hợp để tự mình trang bị và tham gia vào xã hội như một công dân." },
    { code: "2.4.TC1a", text: "Lựa chọn được các công cụ và công nghệ số được xác định rõ ràng và thường xuyên cho các quá trình hợp tác." },
    { code: "2.5.TC1a", text: "Làm rõ được các chuẩn mực hành vi thường xuyên và được xác định rõ ràng cũng như bí quyết khi sử dụng công nghệ số và tương tác trong môi trường số." },
    { code: "2.5.TC1b", text: "Thể hiện được các chiến lược giao tiếp thường xuyên và xác định rõ ràng phương thức giao tiếp phù hợp trong môi trường số." },
    { code: "2.5.TC1c", text: "Mô tả các khía cạnh đa dạng về văn hóa và thế hệ được xác định rõ ràng và thông thường cần xem xét trong môi trường số." },
    { code: "2.6.TC1a", text: "Phân biệt được một loạt các danh tính số thông thường và được xác định rõ ràng." },
    { code: "2.6.TC1b", text: "Giải thích được những cách được xác định rõ ràng và thường xuyên để bảo vệ danh tiếng trực tuyến của bản thân." },
    { code: "2.6.TC1c", text: "Mô tả dữ liệu được xác định rõ ràng mà bạn thường xuyên thu được thông qua các công cụ, môi trường hoặc dịch vụ số." },
    { code: "3.1.TC1a", text: "Chỉ ra được cách tạo và chỉnh sửa nội dung có khái niệm cụ thể và mang tính phổ thông bằng những định dạng rõ ràng, phổ biến." },
    { code: "3.1.TC1b", text: "Thể hiện được bản thân thông qua việc tạo ra các nội dung số thông thường và được xác định rõ ràng." },
    { code: "3.2.TC1a", text: "Giải thích được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục nội dung và thông tin mới được xác định rõ ràng để tạo ra những nội dung và thông tin mới và độc đáo." },
    { code: "3.3.TC1a", text: "Chỉ ra được các quy tắc thông thường và được xác định rõ ràng về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số." },
    { code: "3.4.TC1a", text: "Liệt kê được các hướng dẫn thông thường và được xác định rõ ràng cho một hệ thống máy tính để giải quyết các vấn đề thường ngày hoặc thực hiện các tác vụ thường ngày." },
    { code: "4.1.TC1a", text: "Chỉ ra được những cách thức cơ bản và phổ biến để bảo vệ thiết bị và nội dung số." },
    { code: "4.1.TC1b", text: "Phân biệt được những rủi ro và mối đe dọa cơ bản và phổ biến trong môi trường số." },
    { code: "4.1.TC1c", text: "Chọn lựa được các biện pháp an toàn và bảo mật rõ ràng và thường xuyên." },
    { code: "4.1.TC1d", text: "Chỉ ra được những cách thức cơ bản và phổ biến để quan tâm đến mức độ tin cậy và quyền riêng tư." },
    { code: "4.2.TC1a", text: "Giải thích được các cách thức cơ bản và phổ biến để bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số." },
    { code: "4.2.TC1b", text: "Giải thích được các cách thức cơ bản và phổ biến để sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn." },
    { code: "4.2.TC1c", text: "Chỉ ra được các tuyên bố cơ bản và phổ biến trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong các dịch vụ số." },
    { code: "4.3.TC1a", text: "Giải thích được những cách thức cơ bản và phổ biến để tránh rủi ro và đe dọa đối với sức khỏe thể chất và tinh thần khi sử dụng công nghệ số." },
    { code: "4.3.TC1b", text: "Lựa chọn được những cách thức cơ bản và phổ biến để bảo vệ bản thân khỏi nguy cơ trong môi trường số." },
    { code: "4.3.TC1c", text: "Chỉ ra được những công nghệ số cơ bản và phổ biến giúp tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội." },
    { code: "4.4.TC1a", text: "Chỉ ra được những tác động cơ bản và phổ biến của công nghệ số và việc sử dụng công nghệ số đối với môi trường." },
    { code: "5.1.TC1a", text: "Chỉ ra được các vấn đề kỹ thuật thông thường và được xác định rõ ràng khi vận hành thiết bị và sử dụng môi trường số." },
    { code: "5.1.TC1b", text: "Chọn được các giải pháp được xác định rõ ràng và thông thường cho chúng." },
    { code: "5.2.TC1a", text: "Chỉ ra được những nhu cầu được xác định rõ ràng và thường xuyên." },
    { code: "5.2.TC1b", text: "Chọn được các công cụ số thông thường và được xác định rõ ràng cũng như các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó." },
    { code: "5.2.TC1c", text: "Chọn được những cách thông thường và được xác định rõ ràng để điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân." },
    { code: "5.3.TC1a", text: "Chọn được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức rõ ràng cũng như các quy trình và sản phẩm đổi mới được xác định rõ ràng." },
    { code: "5.3.TC1b", text: "Gắn kết được cá nhân và tập thể vào một số quá trình xử lý nhận thức để hiểu và giải quyết các vấn đề mang tính khái niệm và tình huống có vấn đề thông thường và được xác định rõ ràng trong môi trường số." },
    { code: "5.4.TC1a", text: "Giải thích được NLS của bản thân cần được cải thiện hoặc cập nhật ở đâu." },
    { code: "5.4.TC1b", text: "Chỉ ra được nơi để tìm kiếm các cơ hội được xác định rõ ràng để phát triển bản thân và cập nhật sự phát triển công nghệ số." },
    { code: "6.1.TC1a", text: "Giải thích được nguyên tắc hoạt động cơ bản của AI." },
    { code: "6.1.TC1b", text: "Diễn giải được các thuật ngữ và khái niệm liên quan đến AI." },
    { code: "6.2.TC1a", text: "Sử dụng được các công cụ AI trong công việc và học tập hàng ngày." },
    { code: "6.2.TC1b", text: "Thực hành được các kỹ năng sử dụng AI thông qua các bài tập và dự án nhỏ." },
    { code: "6.2.TC1c", text: "Xem xét các khía cạnh đạo đức khi sử dụng AI, bảo đảm không vi phạm quyền riêng tư và bảo mật dữ liệu." },
    { code: "6.3.TC1a", text: "Giải thích được cách thức hoạt động của các hệ thống AI đơn giản." },
    { code: "6.3.TC1b", text: "Tóm tắt được các đặc điểm và ứng dụng của hệ thống AI." }
];

export const COMPETENCIES_TC2: Competency[] = [
    { code: "1.1.TC2a", text: "Minh họa được nhu cầu thông tin." },
    { code: "1.1.TC2b", text: "Tổ chức được tìm kiếm dữ liệu, thông tin và nội dung trong môi trường số." },
    { code: "1.1.TC2c", text: "Mô tả được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng." },
    { code: "1.1.TC2d", text: "Tổ chức được các chiến lược tìm kiếm." },
    { code: "1.2.TC2a", text: "Thực hiện phân tích, so sánh và đánh giá được các nguồn dữ liệu, thông tin và nội dung số." },
    { code: "1.2.TC2b", text: "Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số." },
    { code: "1.3.TC2a", text: "Sắp xếp được thông tin, dữ liệu, nội dung để dễ dàng lưu trữ và truy xuất." },
    { code: "1.3.TC2b", text: "Tổ chức được thông tin, dữ liệu và nội dung trong một môi trường có cấu trúc." },
    { code: "2.1.TC2a", text: "Lựa chọn được nhiều công nghệ số để tương tác." },
    { code: "2.1.TC2b", text: "Lựa chọn được nhiều phương tiện truyền thông số cho phù hợp với bối cảnh nhất định." },
    { code: "2.2.TC2a", text: "Vận dụng được các công nghệ số phù hợp để chia sẻ dữ liệu, thông tin và nội dung số." },
    { code: "2.2.TC2b", text: "Giải thích được cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua công nghệ số." },
    { code: "2.2.TC2c", text: "Áp dụng được các phương pháp tham chiếu và ghi chú nguồn." },
    { code: "2.3.TC2a", text: "Lựa chọn được các dịch vụ số để tham gia vào xã hội." },
    { code: "2.3.TC2b", text: "Thảo luận về các công nghệ số phù hợp để nâng cao năng lực của bản thân và tham gia vào xã hội với tư cách là một công dân." },
    { code: "2.4.TC2a", text: "Lựa chọn được các công cụ và công nghệ số cho các quá trình hợp tác." },
    { code: "2.5.TC2a", text: "Thảo luận về các chuẩn mực hành vi và cách sử dụng công nghệ số và tương tác trong môi trường số." },
    { code: "2.5.TC2b", text: "Thảo luận các chiến lược giao tiếp phù hợp trong môi trường số." },
    { code: "2.5.TC2c", text: "Thảo luận các khía cạnh đa dạng về văn hóa và thế hệ cần xem xét trong môi trường số." },
    { code: "2.6.TC2a", text: "Hiển thị được nhiều danh tính số cụ thể." },
    { code: "2.6.TC2b", text: "Thảo luận những cách cụ thể để bảo vệ danh tiếng trực tuyến của bản thân." },
    { code: "2.6.TC2c", text: "Thao tác dữ liệu cá nhân tạo ra thông qua các công cụ, môi trường hoặc dịch vụ số." },
    { code: "3.1.TC2a", text: "Chỉ ra được cách tạo và chỉnh sửa nội dung ở các định dạng khác nhau." },
    { code: "3.1.TC2b", text: "Thể hiện được bản thân thông qua việc tạo ra các nội dung số." },
    { code: "3.2.TC2a", text: "Thảo luận các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp nội dung và thông tin mới để tạo ra những nội dung và thông tin mới và độc đáo." },
    { code: "3.3.TC2a", text: "Thảo luận các quy tắc về bản quyền và giấy phép áp dụng cho thông tin và nội dung số." },
    { code: "3.4.TC2a", text: "Liệt kê được các hướng dẫn cho một hệ thống máy tính để giải quyết một vấn đề nhất định hoặc thực hiện một nhiệm vụ cụ thể." },
    { code: "4.1.TC2a", text: "Thiết lập được những cách thức bảo vệ thiết bị và nội dung số." },
    { code: "4.1.TC2b", text: "Phân biệt được rủi ro và mối đe dọa trong môi trường số." },
    { code: "4.1.TC2c", text: "Chọn lựa được các biện pháp an toàn và bảo mật." },
    { code: "4.1.TC2d", text: "Giải thích được các cách thức để quan tâm đến mức độ tin cậy và quyền riêng tư." },
    { code: "4.2.TC2a", text: "Thảo luận về cách bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số." },
    { code: "4.2.TC2b", text: "Thảo luận về cách sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn." },
    { code: "4.2.TC2c", text: "Chỉ ra được các tuyên bố trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong các dịch vụ số." },
    { code: "4.3.TC2a", text: "Giải thích được những cách thức để tránh những sự đe dọa liên quan đến việc sử dụng công nghệ số đối với sức khỏe thể chất và tinh thần." },
    { code: "4.3.TC2b", text: "Lựa chọn được cách thức bảo vệ bản thân và người khác khỏi nguy cơ trong môi trường số." },
    { code: "4.3.TC2c", text: "Thảo luận về những công nghệ số giúp tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội." },
    { code: "4.4.TC2a", text: "Thảo luận về các cách thức bảo vệ môi trường khỏi tác động của công nghệ số và việc sử dụng công nghệ số." },
    { code: "5.1.TC2a", text: "Phân biệt được các vấn đề kỹ thuật khi vận hành thiết bị và sử dụng môi trường số." },
    { code: "5.1.TC2b", text: "Chọn được giải pháp cho chúng." },
    { code: "5.2.TC2a", text: "Giải thích nhu cầu cá nhân." },
    { code: "5.2.TC2b", text: "Lựa chọn được các công cụ số và các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó." },
    { code: "5.2.TC2c", text: "Chọn được cách điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân." },
    { code: "5.3.TC2a", text: "Phân biệt được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức và đổi mới quy trình và sản phẩm." },
    { code: "5.3.TC2b", text: "Gắn kết được cá nhân và tập thể vào quá trình xử lý nhận thức để hiểu và giải quyết các vấn đề khái niệm và tình huống có vấn đề trong môi trường số." },
    { code: "5.4.TC2a", text: "Thảo luận về lĩnh vực NLS của bản thân cần được cải thiện hoặc cập nhật." },
    { code: "5.4.TC2b", text: "Chỉ ra được cách hỗ trợ người khác phát triển NLS của họ." },
    { code: "5.4.TC2c", text: "Chỉ ra được nơi để tìm kiếm cơ hội phát triển bản thân và cập nhật sự phát triển công nghệ số." },
    { code: "6.1.TC2a", text: "Áp dụng được các nguyên tắc cơ bản của AI để giải quyết vấn đề đơn giản." },
    { code: "6.1.TC2b", text: "Thực hiện được các thao tác cơ bản trên các công cụ AI." },
    { code: "6.2.TC2a", text: "Tối ưu hóa việc sử dụng các công cụ AI để đạt hiệu quả cao hơn." },
    { code: "6.2.TC2b", text: "Quản lý được việc triển khai các công cụ AI trong các dự án nhỏ." },
    { code: "6.2.TC2c", text: "Bảo vệ được dữ liệu cá nhân và tuân thủ các quy định pháp luật về bảo mật thông tin khi sử dụng AI." },
    { code: "6.3.TC2a", text: "Phân tích được hiệu quả của hệ thống AI trong việc giải quyết các vấn đề cụ thể." },
    { code: "6.3.TC2b", text: "So sánh được hiệu suất của các hệ thống AI khác nhau." }
];

export const MATH_CURRICULUM: CurriculumData = {
    "9": [
        { topic: "Chương I. Phương trình và hệ hai phương trình bậc nhất một ẩn", semester: 1, lessons: [
            { id: "m9-1", title: "Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn", periods: 2, yccd: ["Nhận biết được khái niệm phương trình bậc nhất hai ẩn, hệ hai phương trình bậc nhất hai ẩn", "Nhận biết được khái niệm nghiệm của hệ hai phương trình bậc nhất hai ẩn"], mappings: {} },
            { id: "m9-2", title: "Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn", periods: 4, yccd: ["Giải được hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và phương pháp cộng đại số", "Tìm được nghiệm của hệ hai phương trình bậc nhất hai ẩn bằng máy tính cầm tay"], mappings: {} },
            { id: "m9-3", title: "Luyện tập chung", periods: 2, yccd: ["Ôn tập và củng cố về phương trình bậc nhất hai ẩn và cách giải hệ phương trình bậc nhất hai ẩn"], mappings: {} },
            { id: "m9-4", title: "Bài 3. Giải bài toán bằng cách lập hệ phương trình", periods: 2, yccd: ["Giải được hệ hai phương trình bậc nhất hai ẩn", "Giải quyết được một số vấn đề thực tiễn gắn với hệ hai phương trình bậc nhất hai ẩn"], mappings: {} },
            { id: "m9-5", title: "Bài tập cuối chương I", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến phương trình và hệ phương trình", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến hệ hai phương trình"], mappings: {} }
        ]},
        { topic: "Chương II. Phương trình và bất phương trình bậc nhất một ẩn", semester: 1, lessons: [
            { id: "m9-6", title: "Bài 4. Phương trình quy về phương trình bậc nhất một ẩn", periods: 3, yccd: ["Giải được phương trình tích có dạng ax+b=0", "Giải được phương trình chứa ẩn ở mẫu quy về phương trình bậc nhất"], mappings: {} },
            { id: "m9-7", title: "Bài 5. Bất đẳng thức và tính chất", periods: 2, yccd: ["Nhận biết được thứ tự trên tập hợp các số thực", "Nhận biết được bất đẳng thức và mô tả được một số tính chất cơ bản của bất đẳng thức (tính chất bắc cầu; tính chất liên hệ giữa thứ tự và phép cộng, phép nhân)"], mappings: {} },
            { id: "m9-8", title: "Luyện tập chung", periods: 2, yccd: ["Ôn tập và củng cố về cách giải phương trình quy về phương trình bậc nhất một ẩn ẩn và bất đẳng thức"], mappings: {} },
            { id: "m9-9", title: "Bài 6. Bất phương trình bậc nhất một ẩn", periods: 3, yccd: ["Nhận biết được khái niệm bất phương trình bậc nhất một ẩn, nghiệm của bất phương trình bậc nhất một ẩn", "Giải được bất phương trình bậc nhất một ẩn"], mappings: {} },
            { id: "m9-10", title: "Bài tập cuối chương II", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến bất đẳng thức, phương trình và bất phương trình bậc nhất một ẩn", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến bất phương trình"], mappings: {} }
        ]},
        { topic: "Chương III. Căn bậc hai và căn bậc ba", semester: 1, lessons: [
            { id: "m9-11", title: "Bài 7. Căn bậc hai và căn thức bậc hai", periods: 2, yccd: ["Nhận biết được khái niệm về căn bậc hai của số thực không âm", "Tính được giá trị (đúng hoặc gần đúng) cần bậc hai của một số hữu tỉ bằng máy tính cầm tay", "Nhận biết được khái niệm vể căn thức bậc hai của một biểu thức đại số"], mappings: {} },
            { id: "m9-12", title: "Bài 8. Khai căn bậc hai với phép nhân và phép chia", periods: 2, yccd: ["Sử dụng các tính chất của phép khai phương (khai phương của một bình phương, một tích hay một thương) để thực hiện biến đối, tính giá trị, rút gọn biểu thức"], mappings: {} },
            { id: "m9-13", title: "Luyện tập chung", periods: 2, yccd: ["Củng cố kiến thức về căn bậc hai, căn thức bậc hai, áp dụng các phép khai phương để thực hiện các phép tính, rút gọn biểu thức, ...", "Áp dụng các kiến thức đã học để giải quyết các vấn đề thực tiễn"], mappings: {} },
            { id: "m9-14", title: "Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai", periods: 3, yccd: ["Thực hiện các biến đổi trục căn thức ở mẫu, khử mẫu của biểu thức lấy căn, rút gọn biểu thức chứa dấu căn."], mappings: {} },
            { id: "m9-15", title: "Bài 10. Căn bậc ba và căn thức bậc ba", periods: 1, yccd: ["Nhận biết được khái niệm căn bậc ba của một số thực", "Tính được giá trị (đúng hoặc gần đúng) căn bậc ba của một số hữu tỉ bằng máy tính cầm tay", "Nhận biết được khái niệm về căn thức bậc ba của một biểu thức đại số"], mappings: {} },
            { id: "m9-16", title: "Luyện tập chung", periods: 1, yccd: ["Củng cố các kiến thức liên quan đến các phép biến đổi biểu thức chứa căn bậc hai", "Áp dụng các kiến thức đã học để giải quyết các vấn đề thực tiễn"], mappings: {} },
            { id: "m9-17", title: "Bài tập cuối chương III", periods: 1, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến căn và căn thức bậc hai, bậc ba", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến căn và căn thức bậc hai, bậc ba"], mappings: {} }
        ]},
        { topic: "Ôn tập, Kiểm tra giữa kì I", semester: 1, lessons: [
            { id: "m9-18", title: "Ôn tập giữa học kì I", periods: 2, yccd: ["Hệ thống và củng cố các kiến thức đã học trong nửa đầu học kì I"], mappings: {} },
            { id: "m9-19", title: "Kiểm tra giữa học kì I", periods: 2, yccd: ["Kiểm tra, đánh giá các kiến thức, kĩ năng học sinh được hình thành và rèn luyện trong nửa đầu học kì I"], mappings: {} }
        ]},
        { topic: "Chương IV. Hệ thức lượng trong tam giác vuông", semester: 1, lessons: [
            { id: "m9-20", title: "Bài 11. Tỉ số lượng giác của góc nhọn", periods: 4, yccd: ["Nhận biết được các giá trị sin, côsin, tang, côtang của góc nhọn.", "Giải thích được TSLG của các góc nhọn đặc biệt và của hai góc phụ nhau.", "Tính được giá trị (đúng hoặc gần đủng) TSLG của góc nhọn bằng máy tính cầm tay."], mappings: {} },
            { id: "m9-21", title: "Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng", periods: 3, yccd: ["Giải thích được một số hệ thức về cạnh và góc trong tam giác vuông (cạnh góc vuông bằng cạnh huyền nhân với sin góc đối hoặc nhân với côsin góc kề; cạnh góc vuông bằng cạnh góc vuông còn lại nhân với tang góc đối hoặc nhân với côtang góc kề).", "Giải quyết được một số vấn đề thực tiễn gắn với TSLG của góc nhọn (tính độ dài đoạn thẳng, độ lớn góc; áp dụng giải tam giác vuông)."], mappings: {} },
            { id: "m9-22", title: "Luyện tập chung", periods: 2, yccd: ["Luyện tập củng cố các kiến thức liên quan đến TSLG"], mappings: {} },
            { id: "m9-23", title: "Bài tập cuối chương IV", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến TSLG của góc nhọn", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến TSLG"], mappings: {} }
        ]},
        { topic: "Hoạt động thực hành trải nghiệm", semester: 1, lessons: [
            { id: "m9-24", title: "Tính chiều cao và xác định khoảng cách", periods: 2, yccd: ["Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến TSLG"], mappings: {} }
        ]},
        { topic: "Chương V. Đường tròn", semester: 1, lessons: [
            { id: "m9-25", title: "Bài 13. Mở đầu về đường tròn", periods: 2, yccd: ["Nhận biết được tâm, bán kính, đưòng kính, dây của đường tròn.", "Nhận biết hai điểm đối xứng nhau qua một tâm, qua một trục", "Nhận biết được tâm đối xứng, trục đối xứng của đường tròn"], mappings: {} },
            { id: "m9-26", title: "Bài 14. Cung và dây của một đường tròn", periods: 2, yccd: ["Nhận biết cung, dây cung, đường kính của đường tròn và quan hệ giữa độ dài dây và đường kính.", "Nhận biết góc ở tâm, cung bị chắn", "Nhận biết và xác định số đo của một cung", "So sánh được độ dài của đường kính và dây"], mappings: {} },
            { id: "m9-27", title: "Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên", periods: 2, yccd: ["Tính được độ dài cung tròn.", "Nhận biết được hình quạt tròn và hình vành khuyên.", "Tính được diện tích hình quạt tròn, diện tích hình vành khuyên.", "Giải quyết được một số vấn để thực tiễn gắn với đường tròn (ví dụ: một số bài toán liên quan đến chuyển động tròn trong Vật lí; tính được diện tích một số hình phẳng có thể đưa về những hình phẳng gắn với hình tròn, chẳng hạn hình viên phân,...)."], mappings: {} },
            { id: "m9-28", title: "Luyện tập chung", periods: 2, yccd: ["Luyện tập củng cố các kiến thức liên quan đến các yếu tố (đường kính, dây, cung) của đường tròn.", "Áp dụng các kiến thức đã học để giải quyết một số vấn đè thực tiễn"], mappings: {} },
            { id: "m9-29", title: "Bài 16. Vị trí tương đối của đường thẳng và đường tròn", periods: 2, yccd: ["Mô tả và vẽ hình biểu thị ba vị trí tương đối của đường thẳng và đường tròn: cắt nhau, tiếp xúc nhau, không giao nhau", "Nhận biết tiếp tuyến của đường tròn dựa vào định nghĩa hoặc dấu hiệu nhận biết", "Áp dụng tính chất của hai tiếp tuyến cắt nhau trong giải toán"], mappings: {} },
            { id: "m9-30", title: "Bài 17. Vị trí tương đối của hai đường tròn", periods: 2, yccd: ["Mô tả được ba vị trí tương đối của hai đường tròn (hai đường tròn không giao nhau, hai đường tròn cắt nhau, hai đường tròn tiếp xúc nhau)"], mappings: {} },
            { id: "m9-31", title: "Luyện tập chung", periods: 2, yccd: ["Luyện tập củng cố các VTTĐ của đường thẳng với đường tròn và VTTĐ của hai đường tròn"], mappings: {} },
            { id: "m9-32", title: "Bài tập cuối chương V", periods: 1, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến đường tròn", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến đường tròn"], mappings: {} }
        ]},
        { topic: "Ôn tập, Kiểm tra cuối kì I", semester: 1, lessons: [
            { id: "m9-33", title: "Ôn tập học kì I", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức trong chương trình học kì I"], mappings: {} },
            { id: "m9-34", title: "Kiểm tra học kì I", periods: 2, yccd: ["Kiểm tra, đánh giá các kiến thức, kĩ năng học sinh được hình thành và rèn luyện trong học kì I"], mappings: {} }
        ]},
        { topic: "Chương VI. Hàm số y = ax² (a ≠ 0) Phương trình bậc hai một ẩn", semester: 2, lessons: [
            { id: "m9-35", title: "Bài 18. Hàm số y = ax² (a ≠ 0)", periods: 3, yccd: ["Nhận biết được hàm số y = ax2 (a ≠ 0)", "Vẽ được đồ thị hàm số y = ax2 (a ≠ 0)", "Nhận biết được tính đối xứng (trục) và trục đốí xứng của đồ thị hàm số y = ax2 (a ≠ 0)", "Giải quyết được một số vấn đề thực tiễn gắn với đồ thị của hàm số y = ax2 (a ≠ 0)"], mappings: {} },
            { id: "m9-36", title: "Bài 19. Phương trình bậc hai một ẩn", periods: 3, yccd: ["Nhận biết được khái niệm phương trình bậc hai một ẩn.", "Giải được phương trình bậc hai một ẩn.", "Tính được nghiệm phương trình bậc hai một ẩn bằng máy tính cầm tay.", "Vận dụng được phương trình bậc hai vào giải quyết bài toán thực tiễn."], mappings: {} },
            { id: "m9-37", title: "Luyện tập chung", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến hàm số y = ax2 (a ≠ 0) và giải phương trình bậc hai một ẩn", "Áp dụng các kiến thức đã học để giải quyết các vấn đề thực tiễn liên quan đến nội dung bài học"], mappings: {} },
            { id: "m9-38", title: "Bài 20. Định lí Viète và ứng dụng", periods: 2, yccd: ["Giải thích được định lí Viète và ứng dụng (ví dụ: tính nhẩm nghiệm của phương trình bậc hai, tìm hai số biết tổng và tích của chúng,...)."], mappings: {} },
            { id: "m9-39", title: "Bài 21. Giải bài toán bằng cách lập phương trình", periods: 2, yccd: ["Giải được phương trình bậc hai một ẩn.", "Tính được nghiệm phương trình bậc hai một ẩn bằng máy tính cầm tay.", "Vận dụng được phương trình bậc hai vào giải quyết bài toán thực tiễn."], mappings: {} },
            { id: "m9-40", title: "Luyện tập chung", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức về phương trình bậc hai và giải toán bằng cách lập phương trình"], mappings: {} },
            { id: "m9-41", title: "Bài tập cuối chương VI", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến hàm số y = ax2 (a ≠ 0), giải phương trình bậc hai và ứng dụng của hệ thức Viète.", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến căn và căn thức bậc hai, bậc ba"], mappings: {} }
        ]},
        { topic: "Chương VII. Tần số và Tần số tương đối", semester: 2, lessons: [
            { id: "m9-42", title: "Bài 22. Bảng tần số và biểu đồ tần số", periods: 2, yccd: ["Xác định được tần số của một giá trị", "Thiết lập được bảng tẩn số, biểu đồ tần số (biểu diễn các giá trị và tần số của chúng ở dạng biểu đồ cột hoặc biểu đồ đoạn thẳng).", "Giải thích được ý nghĩa và vai trò của tần số trong thực tiễn.", "Lí giải và thiết lập được dữ liệu vào bảng, biếu đổ thích hợp ở dạng: bảng thống kê; biểu đồ cột; biếu đồ đoạn thẳng.", "Lí giải và thực hiện được cách chuyển dữ liệu từ dạng biểu diễn này sang 62dạng biểu diễn khác"], mappings: {} },
            { id: "m9-43", title: "Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối", periods: 2, yccd: ["Xác định được tần số tương đối của một giá trị.", "Thiết lập được bảng tần số tương đối, biểu đồ tần số tương đối (biểu diễn các giá trị và tần số tương đối của chúng ở dạng biểu đổ cột hoặc biểu đồ hình quạt tròn).", "Giải thích được ý nghĩa và vai trò của tần số tương đối trong thực tiễn.", "Lí giải và thiết lập được dữ liệu vào bảng, biểu đồ thích hợp ở dạng: bảng thống kê; biểu đồ tranh; biểu đồ dạng cột; biểu đồ hình quạt tròn.", "Lí giải và thực hiện được cách chuyển dữ liệu từ dạng biểu diễn này sang dạng biểu diễn khác", "Phát hiện và lí giải được số liệu không chính xác dựa trên mối liên hệ toán học đơn giản giữa các số liệu đã được biểu diễn trong những ví dụ đơn giản"], mappings: {} },
            { id: "m9-44", title: "Luyện tập chung", periods: 1, yccd: ["Ôn tập và củng cố kiến thức về bảng tần số, bảng tần số tương đối, biểu diễn các dữ liệu trên biểu đồ tần số và tần số tương đối"], mappings: {} },
            { id: "m9-45", title: "Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ", periods: 3, yccd: ["Thiết lập được bảng tần số ghép nhóm, bảng tần số tương đối ghép nhóm.", "Thiết lập được biểu đồ tần số tương đối ghép nhóm ở dạng biểu đồ cột vả dạng biểu đồ đoạn thẳng.", "Lí giải và thiết lập được dữ liệu vào bảng thích hợp.", "Lí giải và thực hiện được cách chuyển dữ liệu từdạng biểu diễn này sang dạng biểu diễn khác.", "Nhận biết được mối liên hệ giữa thống kê với những kiến thức cửa các môn học khác trong chương trình lớp 9 và trong thực tiễn."], mappings: {} },
            { id: "m9-46", title: "Bài tập cuối chương VII", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến chương thống kê", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến nội dung đã học trong chương"], mappings: {} }
        ]},
        { topic: "Chương VIII. Xác suất của biến cố trong một số mô hình xác suất đơn giản", semester: 2, lessons: [
            { id: "m9-47", title: "Bài 25. Phép thử ngẫu nhiên và không gian mẫu", periods: 2, yccd: ["Nhận biết được phép thử ngẫu nhiên và không gian mẫu.", "Nhận biết được một kết quả là thuận lợi cho một biến cố trong một số phép thử đơn giản"], mappings: {} },
            { id: "m9-48", title: "Bài 26. Xác suất của biến cố liên quan tới phép thử", periods: 3, yccd: ["Nhận biết được khái niệm đồng khả năng.", "Tính được xác suất của biến cố bằng cách kiếm đếm số trường hợp có thể và số trường hợp thuận lợi trong một số mô hình xác suất đơn giản"], mappings: {} },
            { id: "m9-49", title: "Luyện tập chung", periods: 2, yccd: ["Củng cố các kiến thức đã học về phép thử, không gian mẫu và tính xác suất của biến cố liên quan tới phép thử"], mappings: {} },
            { id: "m9-50", title: "Bài tập cuối chương VIII", periods: 1, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến chương xác suất", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến nội dung đã học trong chương"], mappings: {} }
        ]},
        { topic: "Ôn tập, Kiểm tra giữa kì II", semester: 2, lessons: [
            { id: "m9-51", title: "Ôn tập giữa học kì II", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức trong chương trình nửa đầu học kì II"], mappings: {} },
            { id: "m9-52", title: "Kiểm tra giữa học kì II", periods: 2, yccd: ["Kiểm tra, đánh giá các kiến thức, kĩ năng học sinh được hình thành và rèn luyện trong nửa đầu học kì II"], mappings: {} }
        ]},
        { topic: "Chương IX. Đường tròn ngoại tiếp và đường tròn nội tiếp", semester: 2, lessons: [
            { id: "m9-53", title: "Bài 27. Góc nội tiếp", periods: 1, yccd: ["Nhận biết được góc ở tâm, góc nội tiếp.", "Giải thích được mối liên hệ giữa số đo của cung với số đo góc ở tâm, số đo góc nội tiếp.", "Giải thích được mối liên hệ giữa số đo góc nội tiếp và số đo góc ở tâm cùng chắn một cung"], mappings: {} },
            { id: "m9-54", title: "Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác", periods: 2, yccd: ["Nhận biết được định nghĩa đường trỏn ngoại tiếp tam giác", "Xác định được tâm và bán kính đường tròn ngoại tiếp tam giác, trong đó có tâm và bán kính đường tròn ngoại tiếp tam giác vuông, tam giác đều.", "Vẽ được đường tròn ngoại tiếp tam giác bằng dụng cụ học tập.", "Nhận biết được định nghĩa đường tròn nội tiếp tam giác.", "Xác định được tâm và bán kính đường tròn nội tiếp tam giác, trong đó có tâm và bán kính đường tròn nội tiếp tam giác đều.", "Vẽ được đường tròn nội tiếp tam giác bằng dụng cụ học tập"], mappings: {} },
            { id: "m9-55", title: "Luyện tập chung", periods: 2, yccd: ["Luyện tập củng cố các kiến thức về góc với đường tròn, đường tròn ngoại tiếp, nội tiếp trong tam giác", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến đường tròn"], mappings: {} },
            { id: "m9-56", title: "Bai 29. Tứ giác nội tiếp", periods: 2, yccd: ["Nhận biết được tứ giác nội tiếp đường tròn và giải thích được định lí về tổng hai góc đối của tứ giác nội tiếp bằng 180°.", "Xác định được tâm và bán kính đường tròn ngoại tiếp hình chữ nhật, hình vuông"], mappings: {} },
            { id: "m9-57", title: "Bài 30. Đa giác đều", periods: 2, yccd: ["Nhận dạng được đa giác đều.", "Nhận biết được phép quay. Mô tả được các phép quay giữ nguyên hình đa giác đểu.", "Nhận biết được những hình phẳng đểu trong tự nhiên, nghệ thuật, kiến trúc, công nghệ chế tạo.", "Nhận biết được vẻ đẹp của thế giới tự nhiên biểu hiện qua tính đều."], mappings: {} },
            { id: "m9-58", title: "Luyện tâp chung", periods: 2, yccd: ["Luyện tập củng cố các kiến thức về tứ giác nội tiếp và đa giác đều", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến đường tròn"], mappings: {} },
            { id: "m9-59", title: "Bài tập cuối chương IX", periods: 1, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến nội dung đã học của chương", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến đường tròn"], mappings: {} }
        ]},
        { topic: "Chương X. Một số hình khối trong thực tiễn", semester: 2, lessons: [
            { id: "m9-60", title: "Bài 31. Hình trụ và hình nón", periods: 2, yccd: ["Mô tả được đường sinh, chiểu cao, bán kính đáy của hình trụ, tạo lập được hình trụ.", "Tính được diện tích xung quanh và thể tích của hình trụ, hình nón", "Giải quyết được một sô vấn đề thực tiễn gắn với việc tính diện tích xung quanh vả thể tích của hình trụ, hình nón"], mappings: {} },
            { id: "m9-61", title: "Bài 32. Hình cầu", periods: 2, yccd: ["Mô tả được tâm, bán kính của hình cầu, tạo lập được hình cầu, mặt cầu. Nhận biết được phần chung của mặt phẳng và hình cầu.", "Tính được diện tích của mặt cầu, thể tích của hình cầu.", "Giải quyết được một số vấn đề thực tiễn gắn với việc tính diện tích của mặt cầu và thể tích của hình cầu"], mappings: {} },
            { id: "m9-62", title: "Luyện tập chung", periods: 2, yccd: ["Luyện tập củng cố các kiến thức liên quan đến hình học trực quan", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến hình học trực quan"], mappings: {} },
            { id: "m9-63", title: "Bài tập cuối chương X", periods: 1, yccd: ["Ôn tập và củng cố các kiến thức liên quan đến hình học trực quan", "Áp dụng các kiến thức đã học để giải các dạng toán liên quan và giải quyết một số vấn đề thực tiễn liên quan đến hình học trực quan"], mappings: {} }
        ]},
        { topic: "Hoạt động thực hành trải nghiệm", semester: 2, lessons: [
            { id: "m9-64", title: "Giải phương trình, hệ phương trình và vẽ đồ thị hàm số với phần mềm GeoGebra", periods: 3, yccd: ["Sử dụng phần mềm GeoGbra để giải phương trình một ẩn, giải hệ hai phương trình bậc nhất hai ẩn và vẽ đồ thị hàm số"], mappings: {} },
            { id: "m9-65", title: "Xác định tần số, tần số tương đối, vẽ các biểu đồ biểu diễn bảng tần số, tần số tương đối bằng Excel", periods: 2, yccd: ["Học sinh sử dụng được Excel để thiết lập bảng tần số, tần số tương đối và vẽ biểu đồ biểu diễn bảng thống kê này"], mappings: {} },
            { id: "m9-66", title: "Gene trội trong các thế hệ lai", periods: 2, yccd: ["Áp dụng các kiến thức đã học vào giải quyết vấn đề thực tiễn"], mappings: {} }
        ]},
        { topic: "Ôn tập, Kiểm tra cuối kì II", semester: 2, lessons: [
            { id: "m9-67", title: "Ôn tập học kì II", periods: 2, yccd: ["Ôn tập và củng cố các kiến thức trong chương trình học kì II"], mappings: {} },
            { id: "m9-68", title: "Kiểm tra học kì II", periods: 2, yccd: ["Kiểm tra, đánh giá các kiến thức, kĩ năng học sinh được hình thành và rèn luyện trong học kì II"], mappings: {} }
        ]}
    ]
};

export const CURRICULUM_DATA: CurriculumData = {
    "6": [
        { topic: "Chủ đề 1. Máy tính và cộng đồng", semester: 1, lessons: [
            { id: "6-1", title: "Bài 1. Thông tin và dữ liệu", yccd: [
                "Nhận biết được sự khác nhau giữa thông tin và dữ liệu.",
                "Phân biệt được thông tin và vật mang thông tin.",
                "Nêu được ví dụ minh họa tầm quan trọng của thông tin.",
                "Nêu được ví dụ minh họa giữa thông tin và dữ liệu."
            ], mappings: { 
                "1.1.TC1a": { selected: true, type: "manual", reason: "HS nêu được ví dụ minh họa tầm quan trọng của thông tin để giải thích nhu cầu thông tin trong đời sống." },
                "1.2.TC1b": { selected: true, type: "manual", reason: "HS phân biệt được thông tin và vật mang thông tin nhằm thực hiện phân tích, diễn giải và đánh giá được dữ liệu số xác định." },
                "4.4.TC1a": { selected: true, type: "manual", reason: "HS thảo luận về các loại thông tin rác nhằm chỉ ra tác động cơ bản của công nghệ số đối với môi trường thông tin." }
            } },
            { id: "6-2", title: "Bài 2. Xử lí thông tin", yccd: [
                "Nêu được các bước cơ bản trong xử lí thông tin.",
                "Giải thích được máy tính là công cụ hiệu quả để xử lí thông tin. Nêu được ví dụ minh họa cụ thể."
            ], mappings: { 
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS giải thích được máy tính là công cụ hiệu quả để xử lí thông tin nhằm chọn được các công cụ số phù hợp cho nhu cầu." },
                "6.1.TC1a": { selected: true, type: "manual", reason: "HS so sánh cách máy tính và AI xử lý thông tin để giải thích được nguyên tắc hoạt động cơ bản của AI." },
                "6.3.TC1b": { selected: true, type: "manual", reason: "HS thảo luận về các bước xử lý dữ liệu của hệ thống thông minh nhằm tóm tắt đặc điểm của hệ thống AI." }
            } },
            { id: "6-3", title: "Bài 3. Thông tin trong máy tính", yccd: [
                "Giải thích được việc có thể biểu diễn thông tin chỉ với hai kí hiệu 0 và 1.",
                "Biết được bit là đơn vị nhỏ nhất trong lưu trữ thông tin.",
                "Nêu được tên và độ lớn của các đơn vị đo dung lượng thông tin Byte, KB, MB, GB, quy đổi được một cách gần đúng giữa các đơn vị đo lường này.",
                "Ước lượng được khả năng lưu trữ của các thiết bị nhớ thông dụng như đĩa quang, đĩa từ, thẻ nhớ,...."
            ], mappings: { 
                "1.2.TC1b": { selected: true, type: "manual", reason: "HS giải thích được việc biểu diễn thông tin bằng hai kí hiệu 0 và 1 nhằm thực hiện phân tích và đánh giá dữ liệu số." },
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS nêu được các đơn vị đo dung lượng thông tin để chọn được các công cụ số và giải pháp công nghệ lưu trữ phù hợp." },
                "1.3.TC1a": { selected: true, type: "manual", reason: "HS tính toán dung lượng tệp cần lưu trữ nhằm lựa chọn được dữ liệu phù hợp để tổ chức lưu trữ thường xuyên." }
            } }
        ]},
        { topic: "Chủ đề 2. Mạng máy tính và Internet", semester: 1, lessons: [
            { id: "6-4", title: "Bài 4. Mạng máy tính (t1)", yccd: [
                "Biết được mạng máy tính là gì và lợi ích của nó trong cuộc sống.",
                "Kể được tên những thành phần chính của một mạng máy tính."
            ], mappings: { 
                "2.1.TC1a": { selected: true, type: "manual", reason: "HS kể được tên những thành phần chính của mạng máy tính nhằm thực hiện các tương tác xác định với công nghệ số." },
                "5.1.TC1a": { selected: true, type: "manual", reason: "HS nhận biết mạng máy tính để chỉ ra các vấn đề kỹ thuật thông thường khi vận hành thiết bị kết nối." },
                "5.1.TC1b": { selected: true, type: "manual", reason: "HS thực hiện các thao tác kết nối thiết bị cơ bản nhằm chọn các giải pháp thông thường cho vấn đề kỹ thuật." }
            } },
            { id: "6-5", title: "Kiểm tra giữa học kì I", yccd: ["Đánh giá kiến thức về thông tin, dữ liệu và mạng máy tính."], mappings: {} },
            { id: "6-6", title: "Bài 4. Mạng máy tính (t2)", yccd: [
                "Nêu được ví dụ cụ thể về trường hợp mạng không dây tiện dụng hơn mạng có dây."
            ], mappings: { 
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS nêu được ví dụ cụ thể về mạng không dây để chọn được các giải pháp công nghệ phù hợp với nhu cầu kết nối." },
                "5.2.TC1c": { selected: true, type: "manual", reason: "HS thảo luận về cách điều chỉnh kết nối Wifi nhằm chọn những cách thông thường để tùy chỉnh môi trường số." }
            } },
            { id: "6-7", title: "Bài 5. Internet", yccd: [
                "Biết Internet là gì.",
                "Biết được một số đặc điểm chính của Internet.",
                "Biết một số lợi ích chính của Internet."
            ], mappings: { 
                "2.1.TC1a": { selected: true, type: "manual", reason: "HS nhận biết đặc điểm Internet để thực hiện các tương tác xác định và thường xuyên trên môi trường mạng." },
                "2.3.TC1b": { selected: true, type: "manual", reason: "HS thảo luận về vai trò của Internet trong đời sống nhằm xác định các công nghệ số thích hợp để tham gia xã hội." }
            } }
        ]},
        { topic: "Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính", semester: 1, lessons: [
            { id: "6-8", title: "Bài 15. Thuật toán", yccd: [
                "Diễn tả được sơ lược khái niệm của thuật toán, nêu được một vài ví dụ minh họa.",
                "Biết thuật toán có thể được mô tả dưới dạng liệt kê hoặc sơ đồ khối."
            ], mappings: { 
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS mô tả thuật toán bằng cách liệt kê để liệt kê được các hướng dẫn cho hệ thống máy tính giải quyết tác vụ." },
                "5.3.TC1b": { selected: true, type: "manual", reason: "HS thiết kế thuật toán cho các vấn đề thường ngày nhằm gắn kết quá trình xử lý nhận thức giải quyết vấn đề." }
            } },
            { id: "6-9", title: "Bài 16. Các cấu trúc điều khiển", yccd: [
                "Biết các cấu trúc: Tuần tự, rẽ nhánh và lặp.",
                "Mô tả được thuật toán đơn giản có các cấu trúc tuần tự, rẽ nhánh và lặp dưới dạng liệt kê hoặc sơ đồ khối."
            ], mappings: { 
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS mô tả được thuật toán có các cấu trúc lặp, rẽ nhánh nhằm liệt kê các hướng dẫn cho hệ thống máy tính giải quyết vấn đề." },
                "6.1.TC1b": { selected: true, type: "manual", reason: "HS tìm hiểu về logic của các hệ thống tự động dựa trên thuật toán nhằm diễn giải thuật ngữ liên quan đến công nghệ thông minh." }
            } },
            { id: "6-10", title: "Ôn tập học kì I", yccd: ["Hệ thống hóa kiến thức học kì I."], mappings: {} },
            { id: "6-11", title: "Kiểm tra cuối kì I", yccd: ["Đánh giá tổng kết học kì I."], mappings: {} },
            { id: "6-12", title: "Bài 17. Chương trình máy tính", yccd: [
                "Biết được chương trình là mô tả một thuật toán để máy tính “hiểu” và thực hiện được."
            ], mappings: { 
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS nhận biết chương trình là bản mô tả thuật toán nhằm liệt kê các hướng dẫn cho hệ thống máy tính thực hiện tác vụ." },
                "6.2.TC1b": { selected: true, type: "manual", reason: "HS sử dụng môi trường lập trình trực quan để điều khiển nhân vật nhằm thực hành kỹ năng sử dụng công nghệ số." }
            } }
        ]},
        { topic: "Chủ đề 5. Ứng dụng tin học", semester: 2, lessons: [
            { id: "6-13", title: "Bài 10. Sơ đồ tư duy", yccd: [
                "Biết sắp xếp một cách logic và trình bày dưới dạng sơ đồ tư duy các ý tưởng, khái niệm.",
                "Tạo được sơ đồ tư duy đơn giản bằng phần mềm."
            ], mappings: { 
                "1.3.TC1b": { selected: true, type: "manual", reason: "HS sắp xếp logic các ý tưởng nhằm sắp xếp dữ liệu trật tự trong một môi trường có cấu trúc của sơ đồ tư duy." },
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS tạo được sơ đồ tư duy bằng phần mềm nhằm chỉ ra cách tạo và chỉnh sửa nội dung số định dạng phổ biến." },
                "5.3.TC1a": { selected: true, type: "manual", reason: "HS sử dụng phần mềm sơ đồ tư duy để lên kế hoạch học tập nhằm chọn các công cụ số tạo ra kiến thức đổi mới." }
            } },
            { id: "6-14", title: "Bài 11. Định dạng văn bản", yccd: [
                "Thực hiện được việc định dạng văn bản, trình bày trang văn bản và in."
            ], mappings: { 
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS thực hiện được việc định dạng văn bản nhằm chỉ ra cách tạo và chỉnh sửa nội dung số định dạng văn bản." },
                "3.1.TC1b": { selected: true, type: "manual", reason: "HS thiết kế mẫu văn bản theo phong cách cá nhân nhằm thể hiện bản thân qua việc tạo ra các nội dung số phổ biến." },
                "3.3.TC1a": { selected: true, type: "manual", reason: "HS tìm hiểu về quyền tác giả đối với tài liệu văn bản nhằm chỉ ra các quy tắc về bản quyền số." }
            } },
            { id: "6-15", title: "Bài 12 & 13. Trình bày bảng & Tìm kiếm", yccd: [
                "Trình bày được thông tin ở dạng bảng bằng phần mềm soạn thảo văn bản.",
                "Sử dụng được công cụ tìm kiếm và thay thế của phần mềm."
            ], mappings: { 
                "1.1.TC1b": { selected: true, type: "manual", reason: "HS sử dụng công cụ tìm kiếm trong soạn thảo nhằm thực hiện theo quy trình tìm kiếm nội dung trong môi trường số." },
                "5.2.TC1a": { selected: true, type: "manual", reason: "HS xác định nhu cầu tổ chức dữ liệu theo bảng nhằm chỉ ra được nhu cầu thông tin thường xuyên của bản thân." }
            } },
            { id: "6-16", title: "Bài 14. Thực hành tổng hợp: Sổ lưu niệm", yccd: [
                "Biết cách tổng hợp, sắp xếp các nội dung đã có thành một sản phẩm hoàn chỉnh."
            ], mappings: { 
                "3.2.TC1a": { selected: true, type: "manual", reason: "HS tổng hợp và sắp xếp nội dung sổ lưu niệm để giải thích cách tinh chỉnh và tích hợp các mục nội dung mới vào sản phẩm độc đáo." },
                "2.4.TC1a": { selected: true, type: "manual", reason: "HS thảo luận nhóm để thiết kế nội dung cho sổ lưu niệm chung nhằm lựa chọn công cụ số thường xuyên cho quá trình hợp tác." }
            } },
            { id: "6-17", title: "Kiểm tra giữa học kì II", yccd: ["Đánh giá kỹ năng soạn thảo và sơ đồ tư duy."], mappings: {} },
            { id: "6-18", title: "Bài 6. Mạng thông tin toàn cầu", yccd: [
                "Trình bày sơ lược được các khái niệm World Wide Web (WWW).",
                "Khai thác được thông tin trên một số trang Web thông dụng."
            ], mappings: { 
                "1.1.TC1d": { selected: true, type: "manual", reason: "HS khai thác thông tin trên web nhằm giải thích được rõ ràng chiến lược tìm kiếm thông tin theo quy trình." },
                "1.1.TC1c": { selected: true, type: "manual", reason: "HS sử dụng các liên kết trên trình duyệt để chuyển đổi giữa các trang web nhằm giải thích được cách truy cập và điều hướng kết quả tìm kiếm." }
            } },
            { id: "6-19", title: "Bài 7. Tìm kiếm thông tin trên Internet", yccd: [
                "Thực hiện được việc tìm kiếm và khai thác thông tin trên Internet."
            ], mappings: { 
                "1.1.TC1b": { selected: true, type: "manual", reason: "HS thực hiện được việc tìm kiếm thông tin trên Internet nhằm thực hiện quy trình tìm dữ liệu trong môi trường số." },
                "1.2.TC1a": { selected: true, type: "manual", reason: "HS so sánh thông tin từ nhiều trang web khác nhau nhằm thực hiện so sánh, đánh giá độ tin cậy của các nguồn nội dung số." }
            } }
        ]},
        { topic: "Chủ đề 4. Đạo đức, pháp luật và văn hóa trong môi trường số hoá", semester: 2, lessons: [
            { id: "6-20", title: "Bài 9. An toàn thông tin trên Internet", yccd: [
                "Biết một số tác hại và nguy cơ khi sử dụng Internet.",
                "Bảo vệ được thông tin và tài khoản cá nhân."
            ], mappings: { 
                "4.1.TC1b": { selected: true, type: "manual", reason: "HS nhận biết tác hại và nguy cơ khi dùng Internet nhằm phân biệt rủi ro cơ bản và phổ biến trong môi trường số." },
                "4.1.TC1c": { selected: true, type: "manual", reason: "HS bảo vệ được thông tin và tài khoản cá nhân nhằm chọn lựa các biện pháp an toàn và bảo mật thường xuyên." },
                "4.1.TC1a": { selected: true, type: "manual", reason: "HS thực hiện thiết lập mật khẩu mạnh nhằm chỉ ra được những cách thức cơ bản để bảo vệ thiết bị và nội dung số." },
                "4.1.TC1d": { selected: true, type: "manual", reason: "HS thảo luận về tầm quan trọng của tính riêng tư khi chia sẻ thông tin nhằm chỉ ra cách thức cơ bản quan tâm đến quyền riêng tư." },
                "4.2.TC1a": { selected: true, type: "manual", reason: "HS thảo luận về cách phòng tránh đánh cắp thông tin cá nhân nhằm giải thích được các cách thức cơ bản bảo vệ dữ liệu cá nhân." },
                "4.2.TC1b": { selected: true, type: "manual", reason: "HS liệt kê các thông tin không nên công khai trên mạng nhằm giải thích các cách thức sử dụng định danh cá nhân an toàn." },
                "4.2.TC1c": { selected: true, type: "manual", reason: "HS xem qua một số điều khoản cơ bản của dịch vụ mạng nhằm chỉ ra các tuyên bố trong chính sách quyền riêng tư phổ biến." },
                "4.3.TC1a": { selected: true, type: "manual", reason: "HS thảo luận về rủi ro của việc kết bạn với người lạ qua mạng nhằm giải thích cách tránh nguy cơ đối với sức khỏe tinh thần." },
                "4.3.TC1b": { selected: true, type: "manual", reason: "HS chọn các biện pháp báo cáo khi gặp nội dung xấu nhằm lựa chọn được các cách thức bảo vệ bản thân khỏi nguy cơ số." },
                "4.3.TC1c": { selected: true, type: "manual", reason: "HS tham gia các chiến dịch tuyên truyền an toàn mạng nhằm chỉ ra các công nghệ số giúp tăng cường hòa hợp xã hội." }
            } },
            { id: "6-21", title: "Ôn tập cuối kì II", yccd: ["Ôn tập kiến thức HK2."], mappings: {
                "5.4.TC1a": { selected: true, type: "manual", reason: "HS tự đánh giá năng lực công nghệ sau một năm học nhằm giải thích được NLS của bản thân cần được cải thiện ở đâu." },
                "5.4.TC1b": { selected: true, type: "manual", reason: "HS liệt kê một số trang web tự học tin học trực tuyến nhằm chỉ ra nơi tìm kiếm cơ hội phát triển bản thân." }
            } },
            { id: "6-22", title: "Kiểm tra cuối học kì II", yccd: ["Đánh giá tổng kết năm học."], mappings: {} },
            { id: "6-23", title: "Bài 8. Thư điện tử", yccd: [
                "Thực hiện được việc đăng nhập, soạn, gửi, đăng xuất hộp thư điện tử."
            ], mappings: { 
                "2.1.TC1a": { selected: true, type: "manual", reason: "HS soạn và gửi thư điện tử nhằm thực hiện các tương tác được xác định rõ ràng với công nghệ số." },
                "2.1.TC1b": { selected: true, type: "manual", reason: "HS chọn gửi email thay vì tin nhắn ngắn cho nội dung học thuật nhằm lựa chọn phương tiện giao tiếp phù hợp với bối cảnh." },
                "2.2.TC2a": { selected: true, type: "manual", reason: "HS đính kèm tệp bài học trong email gửi giáo viên nhằm lựa chọn công nghệ phù hợp để trao đổi dữ liệu số." },
                "2.2.TC2b": { selected: true, type: "manual", reason: "HS thực hiện chuyển tiếp (Forward) nội dung học tập cho bạn bè nhằm giải thích cách đóng vai trò trung gian chia sẻ thông tin." },
                "2.2.TC2c": { selected: true, type: "manual", reason: "HS ký tên và trích dẫn nguồn khi chia sẻ nội dung trong email nhằm minh họa phương pháp tham chiếu và ghi chú nguồn." },
                "2.5.TC1a": { selected: true, type: "manual", reason: "HS soạn email với đầy đủ tiêu đề và nội dung lịch sự nhằm làm rõ các chuẩn mực hành vi khi sử dụng công nghệ số." },
                "2.5.TC1b": { selected: true, type: "manual", reason: "HS thảo luận về cách phản hồi email chuyên nghiệp nhằm thể hiện được các chiến lược giao tiếp trong môi trường số." },
                "2.5.TC1c": { selected: true, type: "manual", reason: "HS thảo luận về cách dùng ngôn ngữ phù hợp với từng đối tượng nhận thư nhằm mô tả các khía cạnh đa dạng văn hóa và thế hệ." },
                "2.6.TC1a": { selected: true, type: "manual", reason: "HS so sánh giữa tài khoản email học tập và email cá nhân nhằm phân biệt các danh tính số thông thường." },
                "2.6.TC1b": { selected: true, type: "manual", reason: "HS thảo luận về cách giữ gìn hình ảnh cá nhân qua email nhằm giải thích những cách bảo vệ danh tiếng trực tuyến." },
                "2.6.TC1c": { selected: true, type: "manual", reason: "HS xem lại lịch sử các thư đã gửi nhằm mô tả dữ liệu được xác định rõ ràng thu được qua dịch vụ số." },
                "6.2.TC1a": { selected: true, type: "manual", reason: "HS sử dụng các tính năng thông minh của Gmail (như lọc thư, nhắc nhở) nhằm sử dụng được các công cụ hỗ trợ AI trong học tập hàng ngày." }
            } }
        ]}
    ],
    "7": [
        { topic: "Chủ đề 1: Máy tính và cộng đồng", semester: 1, lessons: [
            { id: "7-1", title: "Bài 1. Thiết bị vào ra", yccd: [
                "Biết và nhận ra được các thiết bị vào – ra có nhiều loại, hình dạng khác nhau, biết được chức năng của mỗi loại thiết bị này trong thu thập, lưu trữ, xử lí và truyền thông tin.",
                "Thực hiện đúng các thao tác với các thiết bị thông dụng của máy tính.",
                "Nêu được ví dụ cụ thể về những thao tác không đúng cách sẽ gây ra lỗi cho các thiết bị và hệ thống xử lí thông tin."
            ], mappings: {
                "5.1.TC1a": { selected: true, type: "manual", reason: "HS nêu được ví dụ cụ thể về thao tác sai gây lỗi thiết bị nhằm chỉ ra các vấn đề kỹ thuật thông thường khi vận hành thiết bị số." },
                "5.1.TC1b": { selected: true, type: "manual", reason: "HS thực hiện đúng các thao tác với thiết bị thông dụng nhằm chọn được các giải pháp được xác định rõ ràng cho các vấn đề vận hành." }
            } },
            { id: "7-2", title: "Bài 2. Phần mềm máy tính", yccd: [
                "Giải thích được sơ lược chức năng điều khiển và quản lí của hệ điều hành, qua đó phân biệt được hệ điều hành với phần mềm ứng dụng.",
                "Nêu được tên một số phần mềm ứng dụng đã sử dụng."
            ], mappings: {
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS nêu được tên một số phần mềm ứng dụng đã sử dụng nhằm chọn được công cụ số phù hợp để giải quyết các nhu cầu cá nhân." },
                "5.2.TC1c": { selected: true, type: "manual", reason: "HS thực hiện thay đổi hình nền, cài đặt âm thanh hệ thống nhằm chọn những cách tùy chỉnh môi trường số theo nhu cầu cá nhân." }
            } },
            { id: "7-3", title: "Bài 3. Quản lý dữ liệu trong máy tính", yccd: [
                "Giải thích được phần mở rộng của tên tệp cho biết tệp thuộc loại gì, nêu được ví dụ minh hoạ.",
                "Thao tác thành thạo với tệp và thư mục: tạo, sao chép, di chuyển, đổi tên, xoá tệp và thư mục.",
                "Biết được tệp chương trình cũng là dữ liệu, có thể được lưu trữ trong máy tính.",
                "Nêu được ví dụ về biện pháp bảo vệ dữ liệu như sao lưu, phòng chống virus,..."
            ], mappings: {
                "1.3.TC1a": { selected: true, type: "manual", reason: "HS thao tác thành thạo với tệp và thư mục nhằm lựa chọn dữ liệu và nội dung để tổ chức, lưu trữ và truy xuất thường xuyên." },
                "1.3.TC1b": { selected: true, type: "manual", reason: "HS sắp xếp tệp và thư mục trật tự trong cấu trúc cây nhằm sắp xếp dữ liệu trật tự trong một môi trường có cấu trúc." },
                "4.1.TC1c": { selected: true, type: "manual", reason: "HS nêu được ví dụ về biện pháp bảo vệ dữ liệu nhằm chọn lựa các biện pháp an toàn và bảo mật số rõ ràng và thường xuyên." }
            } }
        ]},
        { topic: "Chủ đề 2: Tổ chức dữ liệu, tìm kiếm và trao đổi thông tin", semester: 1, lessons: [
            { id: "7-4", title: "Bài 4. Mạng xã hội và một số kênh trao đổi thông tin (t1)", yccd: [
                "Nêu được tên một kênh trao đổi thông tin thông dụng trên Internet và loại thông tin trao đổi trên đó.",
                "Nêu được một số chức năng cơ bản của MXH.",
                "Nêu được một số ví dụ truy cập không hợp lệ vào các nguồn thông tin và kênh truyền thông tin."
            ], mappings: {
                "2.1.TC1a": { selected: true, type: "manual", reason: "HS nêu được chức năng của mạng xã hội nhằm thực hiện các tương tác xác định và thường xuyên với các công nghệ số." },
                "4.1.TC1b": { selected: true, type: "manual", reason: "HS nêu được các ví dụ truy cập không hợp lệ nhằm phân biệt những rủi ro và mối đe dọa phổ biến trong môi trường số." },
                "2.3.TC1a": { selected: true, type: "manual", reason: "HS tìm hiểu về các ứng dụng dịch vụ công qua MXH nhằm lựa chọn được các dịch vụ số phổ biến tham gia xã hội." }
            } },
            { id: "7-5", title: "KIỂM TRA GIỮA HỌC KỲ I", yccd: ["Đánh giá tổng hợp kiến thức từ Chủ đề 1 đến Chủ đề 2."], mappings: {} },
            { id: "7-6", title: "Bài 4. Mạng xã hội và một số kênh trao đổi thông tin (t2)", yccd: [
                "Thực hiện được giao tiếp qua mạng (trực tuyến hay không trực tuyến) theo đúng quy tắc và bằng ngôn ngữ lịch sự, thể hiện ứng xử có văn hoá.",
                "Biết được tác hại của bệnh nghiện Internet, từ đó có ý thức phòng tránh."
            ], mappings: {
                "2.5.TC1a": { selected: true, type: "manual", reason: "HS thực hiện giao tiếp qua mạng lịch sự và văn hóa nhằm làm rõ được các chuẩn mực hành vi thường xuyên khi sử dụng công nghệ số." },
                "2.5.TC1b": { selected: true, type: "manual", reason: "HS thực hiện giao tiếp qua mạng theo đúng quy tắc nhằm thể hiện được các chiến lược giao tiếp thường xuyên trong môi trường số." },
                "4.3.TC1a": { selected: true, type: "manual", reason: "HS nhận biết tác hại bệnh nghiện Internet nhằm giải thích các cách cơ bản để tránh rủi ro đối với sức khỏe tinh thần." },
                "4.3.TC1c": { selected: true, type: "manual", reason: "HS tham gia các nhóm học tập tích cực trên mạng xã hội nhằm chỉ ra những công nghệ số giúp tăng cường thịnh vượng xã hội." }
            } }
        ]},
        { topic: "Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số hoá", semester: 1, lessons: [
            { id: "7-7", title: "Bài 5. Ứng xử trên mạng", yccd: [
                "Nêu được cách ứng xử hợp lí khi gặp trên mạng hoặc các kênh truyền thông tin số những thông tin có nội dung xấu, thông tin không phù hợp lứa tuổi.",
                "Biết nhờ người lớn giúp đỡ, tư vấn khi cần thiết, chẳng hạn khi bị bắt nạt trên mạng."
            ], mappings: {
                "4.3.TC1b": { selected: true, type: "manual", reason: "HS biết nhờ người lớn giúp đỡ khi bị bắt nạt nhằm lựa chọn được các cách thức cơ bản để bảo vệ bản thân khỏi nguy cơ số." },
                "2.5.TC1a": { selected: true, type: "manual", reason: "HS nêu được cách ứng xử hợp lí khi gặp nội dung xấu nhằm làm rõ chuẩn mực hành vi khi sử dụng và tương tác trong môi trường số." },
                "2.6.TC1b": { selected: true, type: "manual", reason: "HS thảo luận về hậu quả của việc phát ngôn thiếu suy nghĩ trên mạng nhằm giải thích các cách bảo vệ danh tiếng trực tuyến." }
            } }
        ]},
        { topic: "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính", semester: 1, lessons: [
            { id: "7-8", title: "Bài 14. Thuật toán tìm kiếm tuần tự", yccd: [
                "Giải thích được một vài thuật toán sắp xếp và tìm kiếm cơ bản, bằng các bước thủ công.",
                "Biểu diễn và mô phỏng được hoạt động của thuật toán đó trên một bộ dữ liệu vào có kích thước nhỏ."
            ], mappings: {
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS giải thích thuật toán bằng các bước thủ công nhằm liệt kê các hướng dẫn cho hệ thống máy tính giải quyết các vấn đề thường ngày." },
                "5.3.TC1b": { selected: true, type: "manual", reason: "HS thực hiện các bước tìm kiếm thủ công trong danh sách nhằm gắn kết quá trình xử lý nhận thức để giải quyết vấn đề." }
            } },
            { id: "7-9", title: "Bài 15. Tìm kiếm nhị phân", yccd: [
                "Hiểu và thực hiện được thuật toán tìm kiếm nhị phân.",
                "Mô phỏng hoạt động của thuật toán trên bộ dữ liệu cụ thể."
            ], mappings: {
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS thực hiện thuật toán tìm kiếm nhị phân nhằm liệt kê các hướng dẫn rõ ràng cho một hệ thống máy tính thực hiện tác vụ tìm kiếm." },
                "6.1.TC1a": { selected: true, type: "manual", reason: "HS thảo luận về cách AI sử dụng tìm kiếm dữ liệu lớn nhằm giải thích nguyên tắc hoạt động cơ bản của hệ thống thông minh." }
            } },
            { id: "7-10", title: "Ôn tập cuối kì I", yccd: ["Hệ thống hóa thuật toán và ứng dụng tin học học kỳ I."], mappings: {} },
            { id: "7-11", title: "KIỂM TRA CUỐI HỌC KỲ 1", yccd: ["Đánh giá tổng kết kiến thức học kỳ I."], mappings: {} },
            { id: "7-12", title: "Bài 16. Thuật toán sắp xếp", yccd: [
                "Giải thích được mối liên quan giữa sắp xếp và tìm kiếm, nêu được ví dụ minh hoạ.",
                "Nêu được ý nghĩa của việc chia một bài toán thành những bài toán nhỏ hơn."
            ], mappings: {
                "5.3.TC1b": { selected: true, type: "manual", reason: "HS chia nhỏ bài toán sắp xếp nhằm gắn kết cá nhân và tập thể vào quá trình xử lý nhận thức để giải quyết vấn đề mang tính khái niệm." },
                "3.1.TC1b": { selected: true, type: "manual", reason: "HS biểu diễn thuật toán sắp xếp bằng sơ đồ khối nhằm thể hiện bản thân qua việc tạo ra các nội dung số thông thường." }
            } }
        ]},
        { topic: "Chủ đề 4: Ứng dụng Tin học", semester: 2, lessons: [
            { id: "7-13", title: "Bài 6. Làm quen với phần mềm bảng tính", yccd: [
                "Nêu được một số chức năng cơ bản của phần mềm bảng tính.",
                "Thực hiện được một số thao tác đơn giản: chọn phông chữ, căn chỉnh dữ liệu, thay đổi độ rộng cột."
            ], mappings: {
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS thực hiện căn chỉnh dữ liệu ô tính nhằm chỉ ra cách tạo và chỉnh sửa nội dung số bằng những định dạng rõ ràng, phổ biến." },
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS lựa chọn phần mềm Excel để quản lý danh sách học sinh nhằm chọn công cụ số phổ biến để giải quyết nhu cầu." }
            } },
            { id: "7-14", title: "Bài 7. Tính toán tự động trên bảng tính", yccd: [
                "Thực hiện được một số phép toán thông dụng, sử dụng được một số hàm đơn giản như MAX, MIN, SUM, AVERAGE, COUNT,...",
                "Sử dụng được công thức và dùng được địa chỉ trong công thức."
            ], mappings: {
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS sử dụng các hàm SUM, MAX, MIN trong công thức nhằm liệt kê các hướng dẫn cho hệ thống bảng tính thực hiện các tác vụ tính toán." },
                "6.2.TC1b": { selected: true, type: "manual", reason: "HS sử dụng các gợi ý hàm tự động của Excel nhằm thực hành kỹ năng sử dụng công cụ hỗ trợ AI trong bài tập." }
            } },
            { id: "7-15", title: "Bài 8. Công cụ hỗ trợ tính toán", yccd: [
                "Sử dụng thành thạo các hàm tính toán cơ bản.",
                "Tạo được bảng tính có số liệu tính toán bằng công thức và hàm."
            ], mappings: {
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS tạo được bảng tính có số liệu tính toán nhằm chỉ ra cách tạo nội dung số bằng những định dạng phổ biến." },
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS sử dụng thành thạo các hàm tính toán nhằm chọn được công cụ số xác định để giải quyết nhu cầu tính toán bảng biểu." },
                "5.3.TC1a": { selected: true, type: "manual", reason: "HS thiết kế bảng tính quản lý chi tiêu cá nhân nhằm chọn các công cụ số tạo ra sản phẩm đổi mới." }
            } },
            { id: "7-16", title: "Bài 9. Trình bày bảng tính (t1)", yccd: [
                "Giải thích được việc đưa các công thức vào bảng tính là một cách điều khiển tính toán tự động trên dữ liệu."
            ], mappings: {
                "3.4.TC1a": { selected: true, type: "manual", reason: "HS giải thích việc đưa công thức vào bảng tính nhằm liệt kê các hướng dẫn cho hệ thống máy tính thực hiện các tác vụ tự động." },
                "3.2.TC1a": { selected: true, type: "manual", reason: "HS chỉnh sửa lại cấu trúc bảng tính cũ để bổ sung tính toán mới nhằm giải thích cách cải thiện nội dung và thông tin." }
            } },
            { id: "7-17", title: "KIỂM TRA GIỮA HỌC KỲ II", yccd: ["Đánh giá kỹ năng bảng tính và bài học đầu kỳ II."], mappings: {} },
            { id: "7-18", title: "Bài 9. Trình bày bảng tính (t2)", yccd: [
                "Hoàn thiện kỹ năng định dạng và trình bày bảng tính chuyên nghiệp.",
                "Áp dụng các kiểu kẻ bảng và đổ màu nền hợp lý."
            ], mappings: {
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS áp dụng kẻ bảng và đổ màu nền nhằm chỉ ra cách tạo và chỉnh sửa nội dung số chuyên nghiệp bằng những định dạng phổ biến." },
                "3.1.TC1b": { selected: true, type: "manual", reason: "HS trình bày bảng tính theo thẩm mỹ cá nhân nhằm thể hiện bản thân qua việc tạo ra các nội dung số xác định." }
            } },
            { id: "7-19", title: "Bài 10. Hoàn thiện bảng tính", yccd: [
                "Sử dụng được bảng tính điện tử để giải quyết một vài công việc cụ thể đơn giản."
            ], mappings: {
                "5.2.TC1b": { selected: true, type: "manual", reason: "HS sử dụng bảng tính điện tử để giải quyết công việc cụ thể nhằm chọn được giải pháp công nghệ có thể để giải quyết nhu cầu thực tế." },
                "5.2.TC1c": { selected: true, type: "manual", reason: "HS tùy chỉnh hiển thị dòng cột theo nhu cầu quan sát dữ liệu nhằm chọn cách tùy chỉnh môi trường số." }
            } },
            { id: "7-20", title: "Bài 11. Tạo bài trình chiếu", yccd: [
                "Nêu được một số chức năng cơ bản của phần mềm trình chiếu."
            ], mappings: {
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS nêu được chức năng phần mềm trình chiếu nhằm chỉ ra cách tạo nội dung số có khái niệm cụ thể bằng trang chiếu." },
                "2.4.TC1a": { selected: true, type: "manual", reason: "HS phối hợp nhóm để phân công nội dung cho bài thuyết trình nhằm lựa chọn công cụ số cho quá trình hợp tác." }
            } },
            { id: "7-21", title: "Ôn tập cuối kì II", yccd: ["Tổng kết ứng dụng bảng tính và trình chiếu."], mappings: {} },
            { id: "7-22", title: "KIỂM TRA CUỐI HỌC KỲ II", yccd: ["Đánh giá kết quả học tập môn Tin học cả năm."], mappings: {} },
            { id: "7-23", title: "Bài 12. Định dạng đối tượng trên trang chiếu", yccd: [
                "Tạo được một báo cáo có tiêu đề, cấu trúc phân cấp, ảnh minh hoạ, hiệu ứng động.",
                "Biết sử dụng các định dạng cho văn bản, ảnh minh hoạ và hiệu ứng một cách hợp lí.",
                "Sao chép được dữ liệu từ tệp văn bản sang trang trình chiếu."
            ], mappings: {
                "3.1.TC1a": { selected: true, type: "manual", reason: "HS tạo báo cáo có cấu trúc và hiệu ứng trên trang chiếu nhằm thể hiện khả năng tạo và chỉnh sửa nội dung số định dạng phổ biến." },
                "3.2.TC1a": { selected: true, type: "manual", reason: "HS sao chép dữ liệu từ tệp văn bản sang trang trình chiếu nhằm giải thích cách tích hợp các mục nội dung mới vào sản phẩm độc đáo." },
                "5.4.TC1a": { selected: true, type: "manual", reason: "HS đánh giá khả năng trình bày của bản thân qua bài thuyết trình nhằm giải thích được NLS cần được cải thiện." },
                "5.4.TC1b": { selected: true, type: "manual", reason: "HS tìm kiếm các mẫu slide đẹp trên Canva hoặc PowerPoint nhằm chỉ ra nơi tìm kiếm cơ hội phát triển bản thân." }
            } }
        ]}
    ],
    "8": [
        { topic: "Chủ đề 1. Máy tính và cộng đồng", semester: 1, lessons: [
            { id: "8-1", title: "Bài 1. Lược sử công cụ tính toán", yccd: [
                "Trình bày được sơ lược lịch sử phát triển máy tính.",
                "Nêu được ví dụ cho thấy sự phát triển máy tính đã đem đến những thay đổi lớn lao cho xã hội loài người."
            ], mappings: {
                "5.3.TC2a": { selected: true, type: "manual", reason: "HS trình bày được sơ lược lịch sử phát triển máy tính để phân biệt các công cụ và công nghệ số qua các thời kỳ đã góp phần tạo ra kiến thức và đổi mới sản phẩm." },
                "2.3.TC2b": { selected: true, type: "manual", reason: "HS nêu được ví dụ về sự phát triển máy tính đem lại thay đổi xã hội nhằm thảo luận về các công nghệ số phù hợp nâng cao năng lực bản thân và hội nhập xã hội." },
                "4.4.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về rác thải điện tử từ các thế hệ máy tính cũ nhằm thảo luận cách bảo vệ môi trường khỏi tác động của công nghệ số." }
            } }
        ]},
        { topic: "Chủ đề 2. Tổ chức, lưu trữ và kìm kiếm và trao đổi thông tin", semester: 1, lessons: [
            { id: "8-2", title: "Bài 2. Thông tin trong môi trường số", yccd: [
                "Nêu được các đặc điểm của thông tin số: đa dạng, được thu thập ngày càng nhanh và nhiều, được lưu trữ với dung lượng khổng lồ.",
                "Nêu được tính bản quyền, độ tin cậy và sự hiệu quả của các công cụ xử lý thông tin số.",
                "Trình bày được tầm quan trọng của việc khai thác các nguồn thông tin đáng tin cậy."
            ], mappings: {
                "1.2.TC2a": { selected: true, type: "manual", reason: "HS trình bày được tầm quan trọng của khai thác nguồn tin tin cậy nhằm thực hiện phân tích, so sánh và đánh giá các nguồn dữ liệu số." },
                "3.3.TC2a": { selected: true, type: "manual", reason: "HS nêu được tính bản quyền của thông tin số nhằm thảo luận các quy tắc về bản quyền và giấy phép áp dụng cho nội dung số." },
                "1.1.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về nhu cầu thông tin trong kỷ nguyên số nhằm minh họa nhu cầu thông tin đa dạng." }
            } },
            { id: "8-3", title: "Bài 3. Thực hành khai thác thông tin số", yccd: [
                "Sử dụng được công cụ tìm kiếm, xử lí và trao đổi thông tin trong môi trường số.",
                "Chủ động tìm kiếm được thông tin để thực hiện nhiệm vụ cụ thể.",
                "Đánh giá được lợi ích của thông tin tìm được trong giải quyết vấn đề."
            ], mappings: {
                "1.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện tìm kiếm thông tin theo nhiệm vụ cụ thể nhằm tổ chức được việc tìm kiếm dữ liệu và nội dung trong môi trường số." },
                "1.2.TC2b": { selected: true, type: "manual", reason: "HS đánh giá được lợi ích của thông tin tìm được nhằm thực hiện phân tích, diễn giải và đánh giá giá trị của dữ liệu số." },
                "1.1.TC2c": { selected: true, type: "manual", reason: "HS mô tả cách truy cập và điều hướng giữa các trang web tin tức nhằm mô tả cách truy cập nội dung số." },
                "1.1.TC2d": { selected: true, type: "manual", reason: "HS liệt kê các từ khóa tìm kiếm nâng cao nhằm tổ chức được các chiến lược tìm kiếm thông tin." },
                "2.1.TC2b": { selected: true, type: "manual", reason: "HS chọn công cụ tìm kiếm hoặc mạng xã hội tùy theo bối cảnh tìm tin nhằm lựa chọn phương tiện truyền thông phù hợp." }
            } },
            { id: "8-4", title: "Ôn tập giữa kì I", yccd: ["Hệ thống kiến thức về lịch sử máy tính và thông tin số."], mappings: {} },
            { id: "8-5", title: "KIỂM TRA GIỮA HỌC KÌ I", yccd: ["Đánh giá tổng kết các kiến thức đã học đầu học kỳ I."], mappings: {} }
        ]},
        { topic: "CĐ 3. Đạo đức, pháp luật và văn hoá trong môi trường số hoá", semester: 1, lessons: [
            { id: "8-6", title: "Bài 4. Đạo đức pháp luật trong sử dụng công nghệ kĩ thuật số", yccd: [
                "Nhận biết và giải thích được một số biểu hiện vi phạm đạo đức và pháp luật khi sử dụng công nghệ số.",
                "Biết các ví dụ vi phạm bản quyền, thu âm, quay phim khi không được phép.",
                "Bảo đảm được các sản phẩm số do bản thân tạo ra thể hiện được đạo đức và không vi phạm pháp luật."
            ], mappings: {
                "2.5.TC2a": { selected: true, type: "manual", reason: "HS giải thích được các biểu hiện vi phạm đạo đức số nhằm thảo luận về các chuẩn mực hành vi và cách sử dụng công nghệ số văn minh." },
                "4.2.TC2a": { selected: true, type: "manual", reason: "HS bảo đảm được sản phẩm số do bản thân tạo ra không vi phạm pháp luật nhằm thảo luận cách bảo vệ dữ liệu cá nhân và quyền riêng tư." },
                "2.5.TC2b": { selected: true, type: "manual", reason: "HS thảo luận về các chiến lược giao tiếp chuẩn mực trên mạng nhằm thảo luận các phương thức giao tiếp phù hợp." },
                "2.5.TC2c": { selected: true, type: "manual", reason: "HS thảo luận về việc tôn trọng sự khác biệt văn hóa khi tương tác trực tuyến nhằm thảo luận các khía cạnh đa dạng văn hóa." },
                "4.1.TC2a": { selected: true, type: "manual", reason: "HS thực hiện các biện pháp chống virus và phần mềm độc hại nhằm thiết lập những cách thức bảo vệ thiết bị số." },
                "4.1.TC2d": { selected: true, type: "manual", reason: "HS giải thích sự cần thiết của việc bảo mật thông tin cá nhân nhằm giải thích các cách thức quan tâm đến quyền riêng tư." },
                "4.2.TC2b": { selected: true, type: "manual", reason: "HS thảo luận về các rủi ro khi chia sẻ ảnh cá nhân lên mạng nhằm thảo luận cách sử dụng thông tin định danh an toàn." },
                "4.2.TC2c": { selected: true, type: "manual", reason: "HS phân tích một số điều khoản bảo mật của ứng dụng phổ biến nhằm chỉ ra tuyên bố trong chính sách quyền riêng tư." },
                "4.3.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về tác hại của ánh sáng xanh và tư thế ngồi máy tính nhằm giải thích cách tránh đe dọa sức khỏe thể chất." },
                "4.3.TC2b": { selected: true, type: "manual", reason: "HS lựa chọn phần mềm lọc nội dung độc hại nhằm lựa chọn cách thức bảo vệ bản thân và người khác." },
                "4.3.TC2c": { selected: true, type: "manual", reason: "HS thảo luận về ứng dụng CNTT trong hoạt động thiện nguyện nhằm thảo luận các công nghệ tăng cường thịnh vượng xã hội." }
            } }
        ]},
        { topic: "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính", semester: 1, lessons: [
            { id: "8-7", title: "Bài 12. Từ thuật toán đến chương trình", yccd: [
                "Mô tả được kịch bản đơn giản dưới dạng thuật toán và tạo được một chương trình đơn giản.",
                "Hiểu được chương trình là dãy các lệnh điều khiển máy tính thực hiện một thuật toán."
            ], mappings: {
                "3.4.TC2a": { selected: true, type: "manual", reason: "HS thực hiện tạo được một chương trình đơn giản nhằm liệt kê các hướng dẫn cho hệ thống máy tính giải quyết một nhiệm vụ cụ thể." },
                "6.1.TC2a": { selected: true, type: "manual", reason: "HS tìm hiểu về cách chương trình tự động đưa ra quyết định dựa trên điều kiện nhằm áp dụng nguyên tắc cơ bản của AI." }
            } },
            { id: "8-8", title: "Bài 13. Biểu diễn dữ liệu", yccd: [
                "Nêu được khái niệm hằng, biến, kiểu dữ liệu, biểu thức.",
                "Sử dụng được các khái niệm hằng, biến trong các chương trình đơn giản của môi trường lập trình trực quan."
            ], mappings: {
                "3.1.TC2a": { selected: true, type: "manual", reason: "HS sử dụng được các hằng và biến trong chương trình nhằm chỉ ra cách tạo và chỉnh sửa nội dung ở các định dạng lập trình số." },
                "1.3.TC2b": { selected: true, type: "manual", reason: "HS tổ chức các biến dữ liệu trong chương trình một cách có cấu trúc nhằm tổ chức thông tin trong môi trường có cấu trúc." }
            } },
            { id: "8-9", title: "Bài 14. Cấu trúc điều khiển", yccd: [
                "Thể hiện được cấu tự tuần tự trong môi trường lập trình trực quan.",
                "Thể hiện được cấu trúc rẽ nhánh và cấu trúc lặp trong chương trình."
            ], mappings: {
                "3.4.TC2a": { selected: true, type: "manual", reason: "HS thể hiện được cấu trúc rẽ nhánh và lặp trong chương trình nhằm liệt kê các hướng dẫn cho máy tính thực hiện tác vụ cụ thể." },
                "5.3.TC2b": { selected: true, type: "manual", reason: "HS thảo luận nhóm để giải quyết các bài toán lập trình phức tạp nhằm gắn kết quá trình xử lý nhận thức giải quyết vấn đề." }
            } },
            { id: "8-10", title: "Ôn tập GHK1", yccd: ["Hệ thống tư duy thuật toán và lập trình căn bản."], mappings: {} },
            { id: "8-11", title: "Kiểm tra GHK1", yccd: ["Đánh giá kỹ năng thiết kế chương trình đơn giản."], mappings: {} },
            { id: "8-12", title: "Bài 15. Gỡ lỗi", yccd: ["Chạy thử, tìm lỗi và sửa được lỗi cho chương trình."], mappings: {
                "5.1.TC2a": { selected: true, type: "manual", reason: "HS thực hiện chạy thử và tìm lỗi cho chương trình nhằm phân biệt các vấn đề kỹ thuật khi vận hành môi trường lập trình số." },
                "5.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện sửa được lỗi cho chương trình nhằm chọn được giải pháp khắc phục sự cố kỹ thuật trong môi trường số." }
            } }
        ]},
        { topic: "Chủ đề 6. Hướng nghiệp với Tin học", semester: 2, lessons: [
            { id: "8-13", title: "Bài 16. Tin học với nghề nghiệp", yccd: [
                "Nêu được một số nghề nghiệp mà ứng dụng tin học sẽ làm tăng hiệu quả công việc.",
                "Nêu được tên một số nghề thuộc lĩnh vực tin học.",
                "Nhận thức và trình bày được vấn đề bình đẳng giới trong ứng dụng tin học."
            ], mappings: {
                "5.4.TC2a": { selected: true, type: "manual", reason: "HS trình bày được vấn đề bình đẳng giới trong tin học nhằm thảo luận về lĩnh vực NLS của bản thân cần được cải thiện hoặc cập nhật cho nghề nghiệp tương lai." },
                "5.4.TC2b": { selected: true, type: "manual", reason: "HS hướng dẫn bạn bè sử dụng một số công cụ nghề nghiệp cơ bản nhằm chỉ ra cách hỗ trợ người khác phát triển NLS." },
                "5.4.TC2c": { selected: true, type: "manual", reason: "HS tìm kiếm các khóa học nghề nghiệp trên các nền tảng trực tuyến nhằm chỉ ra nơi tìm kiếm cơ hội phát triển bản thân." }
            } }
        ]},
        { topic: "Chủ đề 4. Ứng dụng Tin học", semester: 2, lessons: [
            { id: "8-14", title: "Bài 5. Sử dụng bảng tính giải quyết bài toán thực tế", yccd: [
                "Giải thích được sự khác nhau giữa địa chỉ tương đối và địa chỉ tuyệt đối.",
                "Giải thích được sự thay đổi địa chỉ tương đối khi sao chép công thức.",
                "Sử dụng phần mềm bảng tính giải quyết bài toán thực tế.",
                "Sao chép dữ liệu từ các tệp văn bản sang trang tính."
            ], mappings: {
                "5.2.TC2b": { selected: true, type: "manual", reason: "HS sử dụng được bảng tính để giải quyết bài toán thực tế nhằm lựa chọn công cụ số và giải pháp công nghệ để giải quyết nhu cầu." },
                "3.2.TC2a": { selected: true, type: "manual", reason: "HS thực hiện sao chép dữ liệu từ tệp văn bản sang trang tính nhằm thảo luận cách tích hợp thông tin mới tạo ra nội dung số độc đáo." },
                "6.2.TC2a": { selected: true, type: "manual", reason: "HS sử dụng tính năng 'Flash Fill' hoặc gợi ý thông minh của trang tính nhằm tối ưu hóa việc sử dụng các công cụ AI hỗ trợ." }
            } },
            { id: "8-15", title: "Bài 6. Sắp xếp và lọc dữ liệu", yccd: [
                "Sử dụng được phần mềm bảng tính trợ giúp giải quyết bài toán thực tế.",
                "Nêu được các tình huống thực tế cần lọc và sắp xếp dữ liệu.",
                "Thực hiện thành thạo thao tác lọc và sắp xếp."
            ], mappings: {
                "1.3.TC2a": { selected: true, type: "manual", reason: "HS thực hiện thao tác lọc và sắp xếp dữ liệu nhằm sắp xếp dữ liệu bảng tính để dễ dàng lưu trữ và truy xuất." },
                "1.3.TC2b": { selected: true, type: "manual", reason: "HS tổ chức dữ liệu lọc vào các bảng báo cáo riêng biệt nhằm tổ chức dữ liệu trong môi trường có cấu trúc." }
            } },
            { id: "8-16", title: "Bài 7. Trình bày dữ liệu bằng biểu đồ", yccd: [
                "Nêu được một số tình huống thực tế cần sử dụng biểu đồ.",
                "Thực hiện được thao tác tạo biểu đồ của bảng tính."
            ], mappings: {
                "3.1.TC2a": { selected: true, type: "manual", reason: "HS thực hiện thao tác tạo biểu đồ nhằm chỉ ra cách tạo và chỉnh sửa nội dung số ở các định dạng trực quan khác nhau." },
                "3.1.TC2b": { selected: true, type: "manual", reason: "HS thiết kế biểu đồ với màu sắc và chú giải rõ ràng nhằm thể hiện bản thân qua việc tạo ra các nội dung số." }
            } },
            { id: "8-17", title: "Ôn tập giữa kì II", yccd: ["Hệ thống kỹ năng bảng tính và lọc dữ liệu."], mappings: {} },
            { id: "8-18", title: "KTGHK2", yccd: ["Đánh giá năng lực sử dụng bảng tính giải quyết bài toán."], mappings: {} }
        ]},
        { topic: "Chủ đề 4a. Soạn thảo văn bản và trình chiếu nâng cao", semester: 2, lessons: [
            { id: "8-19", title: "Bài 8a. Làm việc với danh sách liệt kê và hình ảnh", yccd: [
                "Thực hiện các thao tác: chèn thêm, xoá bỏ, co dãn hình ảnh.",
                "Vẽ hình đồ hoạ trong văn bản.",
                "Tạo danh sách dạng liệt kê chuyên nghiệp."
            ], mappings: {
                "3.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện vẽ hình đồ họa và tạo danh sách liệt kê nhằm thể hiện bản thân thông qua việc tạo ra các nội dung văn bản số chuyên nghiệp." },
                "2.4.TC2a": { selected: true, type: "manual", reason: "HS thảo luận nhóm để chọn lọc hình ảnh minh họa cho báo cáo chung nhằm lựa chọn công cụ số cho quá trình hợp tác." }
            } },
            { id: "8-20", title: "Bài 9a. Tạo đầu trang, chân trang cho văn bản", yccd: ["Thực hiện được thao tác đánh số trang, thêm đầu trang (header) và chân trang (footer)."], mappings: {
                "3.1.TC2a": { selected: true, type: "manual", reason: "HS thực hiện thêm đầu trang và chân trang nhằm chỉ ra cách tạo và chỉnh sửa nội dung văn bản ở các định dạng cấu trúc khác nhau." },
                "2.2.TC2c": { selected: true, type: "manual", reason: "HS trích dẫn nguồn tài liệu tham khảo ở phần chân trang nhằm áp dụng các phương pháp tham chiếu và ghi chú nguồn." }
            } },
            { id: "8-21", title: "Bài 10a. Định dạng nâng cao cho trang chiếu", yccd: [
                "Chọn đặt màu sắc, cỡ chữ hài hoà và hợp lí với nội dung.",
                "Thực hiện thao tác đánh số trang, thêm đầu trang và chân trang cho trang chiếu."
            ], mappings: {
                "3.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện chọn đặt màu sắc hài hòa cho trang chiếu nhằm thể hiện bản thân qua việc tạo ra các nội dung trình chiếu thẩm mỹ." },
                "5.2.TC2c": { selected: true, type: "manual", reason: "HS tùy chỉnh giao diện bài trình chiếu theo chủ đề riêng nhằm chọn cách điều chỉnh môi trường số theo nhu cầu cá nhân." }
            } },
            { id: "8-22", title: "Ôn tập HK2", yccd: ["Tổng kết ứng dụng văn bản và trình chiếu nâng cao."], mappings: {} },
            { id: "8-23", title: "KTHK2", yccd: ["Đánh giá kỹ năng hoàn thiện văn bản và bài trình chiếu."], mappings: {} },
            { id: "8-24", title: "Bài 11a. Sử dụng bản mẫu cho bài trình chiếu", yccd: [
                "Sử dụng được các bản mẫu (template) tạo bài trình chiếu.",
                "Nhúng được vào trang chiếu đường dẫn đến video hay tài liệu.",
                "Tạo sản phẩm văn bản có tính thẩm mĩ phục vụ thực tế."
            ], mappings: {
                "5.2.TC2c": { selected: true, type: "manual", reason: "HS thực hiện sử dụng bản mẫu trình chiếu nhằm chọn cách điều chỉnh và tùy chỉnh môi trường số theo nhu cầu và thẩm mỹ cá nhân." },
                "3.2.TC2a": { selected: true, type: "manual", reason: "HS thực hiện nhúng đường dẫn video vào bài chiếu nhằm thảo luận cách tích hợp thông tin mới để tạo ra nội dung số độc đáo." },
                "6.2.TC2b": { selected: true, type: "manual", reason: "HS sử dụng các công cụ thiết kế slide tự động từ AI nhằm quản lý việc triển khai công cụ AI trong dự án nhỏ." }
            } }
        ]}
    ],
    "9": [
        { topic: "Chủ đề 1. Thế giới kĩ thuật số", semester: 1, lessons: [
            { id: "9-1", title: "Bài 1. Thế giới kĩ thuật số", yccd: [
                "Nhận biết được sự có mặt của các thiết bị có gắn bộ xử lí thông tin ở khắp nơi.",
                "Nêu được khả năng của máy tính và chỉ ra được một số ứng dụng thực tế của nó trong khoa học kĩ thuật và đời sống.",
                "Giải thích được tác động của công nghệ thông tin lên giáo dục và xã hội thông qua các ví dụ cụ thể."
            ], mappings: {
                "5.3.TC2a": { selected: true, type: "manual", reason: "HS giải thích được tác động của CNTT qua các ví dụ cụ thể nhằm phân biệt các công cụ và công nghệ số dùng để tạo ra kiến thức và đổi mới sản phẩm." },
                "6.1.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về ứng dụng AI trong nhận diện khuôn mặt và dịch thuật nhằm áp dụng nguyên tắc cơ bản của AI vào đời sống." },
                "6.3.TC2a": { selected: true, type: "manual", reason: "HS phân tích tác động của các chatbot thông minh đối với việc học tập nhằm phân tích hiệu quả của hệ thống AI." }
            } }
        ]},
        { topic: "Chủ đề 2. Tổ chức, lưu trữ và tìm kiếm thông tin", semester: 1, lessons: [
            { id: "9-2", title: "Bài 2. Thông tin trong giải quyết vấn đề", yccd: [
                "Giải thích được sự cần thiết phải quan tâm đến chất lượng thông tin khi tìm kiếm, tiếp nhận và trao đổi.",
                "Giải thích được tính mới, tính chính xác, tính đầy đủ, tính sử dụng được của thông tin."
            ], mappings: {
                "1.2.TC2a": { selected: true, type: "manual", reason: "HS giải thích được sự cần thiết của chất lượng thông tin nhằm thực hiện phân tích và đánh giá được độ tin cậy của các nguồn dữ liệu số." },
                "1.1.TC2a": { selected: true, type: "manual", reason: "HS trình bày sự khác biệt giữa tin giả và tin thật nhằm minh họa được nhu cầu thông tin chính xác." }
            } },
            { id: "9-3", title: "Bài 3. Thực hành: Đánh giá chất lượng thông tin", yccd: [
                "Biết cách tìm kiếm được thông tin để giải quyết vấn đề.",
                "Đánh giá được chất lượng thông tin trong giải quyết vấn đề."
            ], mappings: {
                "1.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện tìm kiếm thông tin theo vấn đề cụ thể nhằm tổ chức được việc tìm kiếm dữ liệu và nội dung trong môi trường số." },
                "1.2.TC2b": { selected: true, type: "manual", reason: "HS thực hiện đánh giá chất lượng thông tin thu được nhằm thực hiện phân tích, diễn giải và đánh giá giá trị của dữ liệu số." },
                "6.2.TC2a": { selected: true, type: "manual", reason: "HS sử dụng AI để kiểm chứng và tóm tắt thông tin từ nhiều nguồn nhằm tối ưu hóa việc sử dụng công cụ AI." }
            } }
        ]},
        { topic: "Chủ đề 3. Đạo đức, pháp luật và văn hoá", semester: 1, lessons: [
            { id: "9-4", title: "Bài 4. Một số vấn đề pháp lí về sử dụng Internet", yccd: [
                "Trình bày được tác động tiêu cực của công nghệ kĩ thuật số đối với đời sống.",
                "Nêu được một số nội dung liên quan đến luật Công nghệ thông tin."
            ], mappings: {
                "2.5.TC2a": { selected: true, type: "manual", reason: "HS trình bày được các tác động tiêu cực của công nghệ số nhằm thảo luận về các chuẩn mực hành vi và cách tương tác an toàn trong môi trường số." },
                "4.1.TC2b": { selected: true, type: "manual", reason: "HS nêu được một số nội dung luật CNTT nhằm phân biệt rủi ro và mối đe dọa trong môi trường số và thực thi đúng quy định." },
                "6.2.TC2c": { selected: true, type: "manual", reason: "HS thảo luận về quyền riêng tư và bản quyền đối với các sản phẩm do AI tạo ra nhằm bảo vệ dữ liệu cá nhân." }
            } },
            { id: "9-5", title: "Ôn tập Giữa học kỳ I", yccd: ["Củng cố kiến thức về thế giới kỹ thuật số và chất lượng thông tin."], mappings: {} },
            { id: "9-6", title: "Kiểm tra Giữa học kỳ I", yccd: ["Đánh giá nhận thức về tác động của CNTT và quản lý thông tin."], mappings: {} }
        ]},
        { topic: "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính", semester: 1, lessons: [
            { id: "9-7", title: "Bài 14. Giải quyết vấn đề", yccd: ["Trình bày được quá trình giải quyết vấn đề và mô tả được giải pháp dưới dạng thuật toán."], mappings: {
                "3.4.TC2a": { selected: true, type: "manual", reason: "HS mô tả được giải pháp dưới dạng thuật toán nhằm liệt kê được các hướng dẫn cho hệ thống máy tính giải quyết một vấn đề nhất định." },
                "6.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện các thao tác hỏi đáp với chatbot AI để tìm hướng giải quyết bài toán nhằm thực hiện thao tác cơ bản trên công cụ AI." }
            } },
            { id: "9-8", title: "Bài 15. Bài toán tin học", yccd: [
                "Giải thích được khái niệm bài toán trong tin học.",
                "Nêu được quy trình con người giao bài toán cho máy tính giải quyết."
            ], mappings: {
                "5.3.TC2b": { selected: true, type: "manual", reason: "HS giải thích được quy trình giao bài toán cho máy tính nhằm gắn kết cá nhân vào quá trình xử lý nhận thức để hiểu và giải quyết vấn đề trong môi trường số." },
                "6.3.TC2b": { selected: true, type: "manual", reason: "HS so sánh cách con người giải quyết bài toán và cách AI giải quyết bài toán nhằm so sánh hiệu suất hệ thống AI." }
            } },
            { id: "9-9", title: "Bài 16. Thực hành: Lập chương trình máy tính", yccd: [
                "Sử dụng được cấu trúc tuần tự, rẽ nhánh, lặp trong mô tả thuật toán.",
                "Giải thích được chương trình là bản mô tả thuật toán bằng ngôn ngữ máy."
            ], mappings: {
                "3.4.TC2a": { selected: true, type: "manual", reason: "HS giải thích được chương trình là bản mô tả thuật toán nhằm liệt kê được các hướng dẫn rõ ràng cho máy tính thực hiện nhiệm vụ cụ thể." },
                "6.1.TC2b": { selected: true, type: "manual", reason: "HS thực hành các kỹ năng gỡ lỗi chương trình với sự trợ giúp của AI nhằm thực hiện thao tác trên các công cụ AI." }
            } },
            { id: "9-10", title: "Ôn tập Học kỳ I", yccd: ["Hệ thống tư duy lập trình và bài toán tin học."], mappings: {} },
            { id: "9-11", title: "Kiểm tra Cuối học kỳ I", yccd: ["Đánh giá kỹ năng giải quyết vấn đề bằng máy tính."], mappings: {} }
        ]},
        { topic: "Chủ đề 4. Ứng dụng Tin học", semester: 2, lessons: [
            { id: "9-12", title: "Bài 5. Tìm hiểu phần mềm mô phỏng", yccd: [
                "Nêu được ví dụ phần mềm mô phỏng.",
                "Nêu được những kiến thức đã thu nhận từ việc khai thác phần mềm mô phỏng."
            ], mappings: {
                "5.2.TC2b": { selected: true, type: "manual", reason: "HS nêu được ví dụ phần mềm mô phỏng nhằm lựa chọn các công cụ số và giải pháp công nghệ có thể để giải quyết nhu cầu khám phá tri thức." },
                "5.2.TC2a": { selected: true, type: "manual", reason: "HS giải thích nhu cầu tìm hiểu các hiện tượng tự nhiên thông qua mô phỏng nhằm giải thích nhu cầu cá nhân." }
            } },
            { id: "9-13", title: "Bài 6. Thực hành: Khai thác phần mềm mô phỏng", yccd: ["Nhận biết sự mô phỏng thế giới thực giúp con người khám phá tri thức và giải quyết vấn đề."], mappings: {
                "5.3.TC2a": { selected: true, type: "manual", reason: "HS thực hiện khai thác phần mềm mô phỏng nhằm phân biệt các công cụ số được sử dụng để tạo ra kiến thức và đổi mới quy trình khám phá thế giới." },
                "6.3.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về vai trò của AI trong việc tạo ra các môi trường mô phỏng thực tế ảo nhằm phân tích hiệu quả của hệ thống AI." }
            } },
            { id: "9-14", title: "Bài 7. Trình bày thông tin trong trao đổi và hợp tác", yccd: [
                "Sử dụng được bài trình bày và sơ đồ tư duy trong trao đổi thông tin.",
                "Biết khả năng đính kèm tệp đa phương tiện vào sơ đồ tư duy."
            ], mappings: {
                "2.2.TC2a": { selected: true, type: "manual", reason: "HS thực hiện sử dụng bài trình bày và sơ đồ tư duy nhằm vận dụng các công nghệ số phù hợp để chia sẻ nội dung và thông tin số." },
                "2.4.TC2a": { selected: true, type: "manual", reason: "HS thực hiện trao đổi thông tin nhóm qua sơ đồ tư duy nhằm lựa chọn các công cụ số hiệu quả cho các quá trình hợp tác." },
                "2.2.TC2b": { selected: true, type: "manual", reason: "HS đóng vai trò điều phối viên trong nhóm để tổng hợp và chia sẻ kết quả sơ đồ tư duy nhằm giải thích cách đóng vai trò trung gian chia sẻ thông tin." }
            } },
            { id: "9-15", title: "Bài 8. Thực hành: Sử dụng công cụ trực quan", yccd: ["Tạo được sơ đồ tư duy và bài trình chiếu chuyên nghiệp có sử dụng video, hình ảnh hợp lý."], mappings: {
                "3.1.TC2b": { selected: true, type: "manual", reason: "HS thực hiện tạo bài trình chiếu chuyên nghiệp nhằm thể hiện bản thân thông qua việc tạo ra các sản phẩm nội dung số trực quan và sinh động." },
                "3.2.TC2a": { selected: true, type: "manual", reason: "HS tổng hợp các video và hình ảnh từ nhiều nguồn để tạo ra nội dung trình chiếu độc đáo nhằm thảo luận cách tinh chỉnh và tích hợp nội dung mới." }
            } }
        ]},
        { topic: "Chủ đề 4a. Sử dụng bảng tính điện tử nâng cao", semester: 2, lessons: [
            { id: "9-16", title: "Bài 9a. Sử dụng công cụ xác thực dữ liệu", yccd: ["Thực hiện được công cụ xác thực dữ liệu (Data Validation) để giải quyết bài toán quản lý tài chính."], mappings: {
                "1.3.TC2b": { selected: true, type: "manual", reason: "HS thực hiện được công cụ xác thực dữ liệu nhằm tổ chức thông tin, dữ liệu trong một môi trường bảng tính có cấu trúc chặt chẽ." },
                "5.2.TC2c": { selected: true, type: "manual", reason: "HS thiết lập các quy tắc nhập liệu phù hợp với nhu cầu quản lý riêng của gia đình nhằm chọn cách điều chỉnh môi trường số." }
            } },
            { id: "9-17", title: "Bài 10a. Sử dụng hàm Countif", yccd: ["Thực hiện thao tác hàm đếm theo điều kiện Countif trong giải quyết bài toán quản lý tài chính."], mappings: {
                "5.2.TC2b": { selected: true, type: "manual", reason: "HS thực hiện thao tác hàm Countif nhằm lựa chọn các công cụ và giải pháp bảng tính phù hợp để giải quyết nhu cầu thống kê số liệu." },
                "1.3.TC2a": { selected: true, type: "manual", reason: "HS thống kê số lượng các loại chi tiêu nhằm sắp xếp dữ liệu để dễ dàng lưu trữ và truy xuất." }
            } },
            { id: "9-18", title: "Bài 11a. Sử dụng hàm Sumif", yccd: ["Thực hiện thao tác hàm tính tổng theo điều kiện Sumif để giải quyết bài toán quản lý gia đình."], mappings: {
                "5.2.TC2b": { selected: true, type: "manual", reason: "HS thực hiện thao tác hàm Sumif nhằm lựa chọn công cụ số phù hợp giải quyết nhu cầu tính toán có điều kiện trong thực tế." },
                "3.4.TC2a": { selected: true, type: "manual", reason: "HS áp dụng logic hàm Sumif để tính toán chi phí tự động nhằm liệt kê hướng dẫn cho máy tính thực hiện nhiệm vụ cụ thể." }
            } },
            { id: "9-19", title: "Bài 12a. Sử dụng hàm If", yccd: ["Thực hiện thao tác hàm điều kiện If để giải quyết bài toán quản lý gia đình."], mappings: {
                "3.4.TC2a": { selected: true, type: "manual", reason: "HS thực hiện thao tác hàm điều kiện If nhằm liệt kê được các hướng dẫn logic cho bảng tính thực hiện giải quyết bài toán cụ thể." },
                "6.1.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về cấu trúc rẽ nhánh trong hàm IF tương đương với việc ra quyết định của các hệ thống AI đơn giản." }
            } },
            { id: "9-20", title: "Thực hành tổng hợp", yccd: ["Tổng hợp kỹ năng sử dụng các hàm If, Sumif, Countif và xác thực dữ liệu."], mappings: {
                "3.1.TC2a": { selected: true, type: "manual", reason: "HS thực hiện tổng hợp các kỹ năng hàm bảng tính nhằm chỉ ra cách tạo và chỉnh sửa nội dung quản lý số chuyên sâu ở nhiều định dạng." },
                "6.2.TC2b": { selected: true, type: "manual", reason: "HS quản lý việc triển khai bảng tính quản lý chi tiêu cho gia đình như một dự án nhỏ nhằm quản lý triển khai các công cụ số." }
            } },
            { id: "9-21", title: "Bài 13a. Hoàn thiện bảng tính quản lý tài chính", yccd: ["Tạo được trang tính tổng hợp và hoàn thiện bảng tính quản lý tài chính gia đình."], mappings: {
                "1.3.TC2a": { selected: true, type: "manual", reason: "HS thực hiện hoàn thiện bảng tính tổng hợp nhằm sắp xếp thông tin, dữ liệu để dễ dàng lưu trữ và truy xuất cho quản lý lâu dài." },
                "3.1.TC2b": { selected: true, type: "manual", reason: "HS hoàn thiện sản phẩm bảng tính quản lý tài chính có tính thẩm mỹ và chuyên nghiệp cao nhằm thể hiện bản thân qua nội dung số." }
            } },
            { id: "9-22", title: "Ôn tập Học kỳ II", yccd: ["Hệ thống toàn bộ hàm bảng tính nâng cao và quản lý dữ liệu gia đình."], mappings: {
                "5.4.TC2a": { selected: true, type: "manual", reason: "HS thảo luận về những kỹ năng bảng tính cần được cải thiện sau khi hoàn thành dự án tài chính nhằm thảo luận lĩnh vực NLS cần cập nhật." }
            } },
            { id: "9-23", title: "Kiểm tra Cuối học kỳ II", yccd: ["Đánh giá tổng kết kỹ năng bảng tính nâng cao cả học kỳ II."], mappings: {} },
            { id: "9-24", title: "Bài 17. Tin học và thế giới nghề nghiệp", yccd: [
                "Trình bày được công việc đặc thù và sản phẩm chính của người làm tin học trong ít nhất ba nhóm nghề.",
                "Nhận biết được đặc trưng cơ bản của nhóm nghề thuộc hướng Tin học ứng dụng và Khoa học máy tính.",
                "Giải thích được vấn đề bình đẳng giới trong lĩnh vực tin học."
            ], mappings: {
                "5.4.TC2a": { selected: true, type: "manual", reason: "HS trình bày được công việc đặc thù các nhóm nghề tin học nhằm thảo luận về lĩnh vực NLS của bản thân cần được cải thiện hoặc cập nhật." },
                "5.4.TC2c": { selected: true, type: "manual", reason: "HS xác định các trung tâm đào tạo và trang web hướng nghiệp tin học uy tín nhằm chỉ ra nơi tìm kiếm cơ hội phát triển bản thân." }
            } }
        ] }
    ]
};
