import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentRef,
  Inject,
  inject,
  Injectable,
  Injector
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { Subject } from 'rxjs';
import { OpenModalArgs } from '../models/modalOptions.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalNotifier?: Subject<string>;
  private modalComponentRef?: ComponentRef<ModalComponent>;


  open({ viewContainerRef, content, options }: OpenModalArgs) {
    const modalComponentRef = viewContainerRef.createComponent(ModalComponent);

    const modalInstance = modalComponentRef.instance;
    const embeddedView = content.createEmbeddedView(null);

    modalInstance.size = options?.size || '';
    modalInstance.title = options?.title || '';
    modalInstance.modalText = options?.modalText || '';
    modalInstance.iconVariation = options?.iconVariation || false;
    modalInstance.tiny = options?.tiny || false;

    modalInstance.position = { top: options?.top, left: options?.left };

    embeddedView.detectChanges();
    modalInstance.contentViewRef = embeddedView;

    modalInstance.closeEvent.subscribe(() => this.closeModal());
    modalInstance.submitEvent.subscribe(() => this.submitModal());

    this.modalComponentRef = modalComponentRef;
    this.modalNotifier = new Subject();

    if (options?.autoDestroy) {
      setTimeout(() => {
        this.closeModal();
      }, options.autoDestroy);
    }

    return this.modalNotifier.asObservable();
  }

  closeModal() {
    if (this.modalComponentRef) {
      this.modalComponentRef.destroy();
      this.modalComponentRef = undefined;
    }
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
