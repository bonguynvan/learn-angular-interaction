# learn-angular-interaction
Đề bài: Đọc và viết ý hiểu về `component`, `@input`, `@output` - việc tương tác giữa các component trong project angular. sau đó lấy ví dụ
gửi lại file doc vào email thienth3@fe.edu.vn

Angular 2 cũng như nhiều JavaScript framework hiện nay đều áp dụng x hướng, định hướng web component cho hướng phát triển của họ.

Web components: là tập hợp các Web APIs cho phép chúng ta tạo ra một thẻ HTML riêng, mang các đặc tính riêng, đóng gói, có thể tái sử dụng. Web component được xây dựng trên chuẩn web hiện tại, có thể tương thích với tất cả các library và framework JS có thể làm việc với HTML.  
<ref: https://www.webcomponents.org/introduction>  

Em hiểu nôm na một component là một thành phần html trong toàn bộ nội dung html của một Angular app. Ta có thể định nghĩa các trường trong component và khai báo với Angular là một class, đóng gói code và sử dụng lại nhiều lần.

Nhiều tính năng trong 1 component làm cho quá trình phát triển ứng dụng trở nên khó bảo trì sửa chữa, nên chia component lớn thành các sub-component, mỗi sub-component tập trung vào 1 tính năng cụ thể.<Angular docs>

@Input và @Output, là cách trao đổi data, tương tác giữa các component. Chúng đều là cơ chế send/receive data từ một component đến các component khác.

@Input được dùng để nhận data, trong khi đó @Output được dùng để gửi data đi. 

@Output gửi data đi bằng cách hiển thị các event producers, thường là đối tượng EventEmitter.

Ví dụ đoạn code sau: 

`@Component({`\
  `selector: 'todo-item',`\
  `...`\
`})`\
`export class TodoItemComponent {`\
  `@Input()  item`\
  `@Output() onChange = new EventEmitter()`\
`}`

Đoạn code trên nghĩa là:   

`TodoItemComponent`: 
- gửi data cho tôi, tôi sẽ nhận nó và lưu trữ vào item property.
- nhân tiện sau khi xử lí data tôi sẽ gửi nó qua thuộc tính `onChange`.

Giờ ta có một component  là `TodoListComponent` contains  `TodoItemComponent`.
Trong template của `TodoListComponent`, ta có đoạn code sau:

`...`\
`<todo-item`\
`[item]="myTask"`\
`(onChange)="handleChange($event)"`\
`</todo-item>`\
`…`

Nghĩa là:
- `TodoList` thêm giá trị trong thuộc tính `myTask` và truyền nó vào `TodoItemComponent`.
- Data từ `TodoItem` sẽ được nhận và xử lí bằng function `handleChange()` định nghĩa trong `TodoList`.

Cùng xem một ví dụ.

Ở đây ta tạo 2 component, `HelloComponent` nest trong `AppComponent`. `HelloComponent` có một `@Input` và `@Output`.
