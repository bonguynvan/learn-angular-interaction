# learn-angular-interaction
`component`, `@input`, `@output` - việc tương tác giữa các component trong project angular

Angular 2 cũng như nhiều JavaScript framework hiện nay đều áp dụng xu hướng, định hướng web component cho hướng phát triển của họ.

Web components: là tập hợp các Web APIs cho phép chúng ta tạo ra một thẻ HTML riêng, mang các đặc tính riêng, đóng gói, có thể tái sử dụng. Web component được xây dựng trên chuẩn web hiện tại, có thể tương thích với tất cả các library và framework JS có thể làm việc với HTML.  
  
Em hiểu nôm na một component là một thành phần html trong toàn bộ nội dung html của một Angular app. Ta có thể định nghĩa các trường trong component và khai báo với Angular là một class, đóng gói code và sử dụng lại nhiều lần.

Nhiều tính năng trong 1 component làm cho quá trình phát triển ứng dụng trở nên khó bảo trì sửa chữa, nên chia component lớn thành các sub-component, mỗi sub-component tập trung vào 1 tính năng cụ thể.<Angular docs>

@Input và @Output, là cách trao đổi data, tương tác giữa các component. Chúng đều là cơ chế send/receive data từ một component đến các component khác.

@Input được dùng để nhận data, trong khi đó @Output được dùng để gửi data đi. 

@Output gửi data đi bằng cách hiển thị các event producers, thường là đối tượng EventEmitter.

Ví dụ đoạn code sau: 

```javascript
@Component({
  selector: 'todo-item',
  ...
})
export class TodoItemComponent {
  @Input()  item
  @Output() onChange = new EventEmitter()
}
```

Đoạn code trên nghĩa là:   

`TodoItemComponent`: 
- gửi data cho tôi, tôi sẽ nhận nó và lưu trữ vào item property.
- nhân tiện sau khi xử lí data tôi sẽ gửi nó qua thuộc tính `onChange`.

Giờ ta tạo một component là `TodoListComponent` contains  `TodoItemComponent`.
Trong template của `TodoListComponent`, ta có đoạn code sau:

```javascript
...
<todo-item
[item]="myTask"
(onChange)="handleChange($event)"
</todo-item>
...
```

Nghĩa là:
- `TodoList` thêm giá trị trong thuộc tính `myTask` và truyền nó vào `TodoItemComponent`.
- Data từ `TodoItem` sẽ được nhận và xử lí bằng function `handleChange()` định nghĩa trong `TodoList`.

Cùng xem một ví dụ.

Ở đây ta tạo 2 component, `HelloComponent` nest trong `AppComponent`. `HelloComponent` có một `@Input` và `@Output`.

hello.component.ts  
```javascript
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  ...
  @Input() myFriend: string;
  @Output() onClick = new EventEmitter();
}
```

`HelloComponent` đã nhận một giá trị kiểu string và lưu vào thuộc tính myFriend.

Khi ta click vào hello component, thuộc tính `onClick` trong `@Output` sẽ truyền ra bên ngoài với thông điệp 'Hello Bro!' 

hello.component.html  
```javascript
<p (click)="onClick.emit('Hello Bro!')">
```

Dưới đây là AppComponent 

app.component.ts  
```javascript
...
export class AppComponent  {
  ng = 'Angular' ;
  result = '' ;
  upCase = (st:string) => { ... }
}
...
```

app.component.html  
```javascript
...
<app-hello myFriend="{{ ng }}" (onClick)="upCase($event)"></app-hello>
...
```

AppComponent đã làm 2 việc:
 
- Truyền giá trị `Angular` cho hello component thông qua trường `ng`.
- Nhận vào string sau khi sự kiện `onClick` ở hello component được kích hoạt

Bài viết em tham khảo : <a href='https://medium.com/@foolishneo/understanding-input-output-and-eventemitter-in-angular-c1aeb9fff594'>Understanding @Input, @Output and EventEmitter in Angular</a><br>
<a href='https://www.webcomponents.org/introduction'>Introduction web component</a>
