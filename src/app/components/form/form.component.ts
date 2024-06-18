import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-form',
  template: `
    <form>
      <!-- form elements -->
    </form>
    <button (click)="save()">Save</button>
  `
})
export class FormComponent implements CanComponentDeactivate {
  hasUnsavedChanges = false;

  // Method to save form data
  save() {
    // Save form data logic
    this.hasUnsavedChanges = false; // Reset unsaved changes flag
  }

  // Implementation of canDeactivate
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
