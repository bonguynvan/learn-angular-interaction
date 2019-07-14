# learn-angular-interaction
`@Component({
   selector: 'todo-item',
   ...
 })
 export class TodoItemComponent {
   @Input()  item
   @Output() onChange = new EventEmitter()
 }`
