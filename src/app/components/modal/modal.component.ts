import {Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	@ViewChild('modalActivator') public modalActivator: ElementRef;
	@ViewChild('modalCloseButton') public modalCloseButton: ElementRef;
	
  @Input() modalBodyTemplate: any;

  @Output() public onModalButtonClick = new EventEmitter();
  @Output() public onCloseModal = new EventEmitter();
 
 @Input() title = ''; // Modal title
  @Input() titleLeft = true; // Title left or right
  @Input() modalWidth = '500px'; // The width can be in px % or vw.

  constructor(
  		) {

  }
  // Displays the modal by triggering a click to a hidden button.
  public displayModal() {
  	this.modalActivator.nativeElement.click();
  }

  public closeModal() {
  	this.modalCloseButton.nativeElement.click();
  }

   private dynamicTitle: Function = () => {};

   private onStateChange(event) {
   	this.onCloseModal.emit(event);
   }

   private onModalbuttonClick(button) {
   	this.onModalButtonClick.emit(button);
   }

}
