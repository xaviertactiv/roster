import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

export class JobForm {
    public form: FormGroup;
    public errors: string = null;
    public submitted = false;

    constructor(data) {
        // initialize the form builder
        this.form = new FormBuilder().group({
            title : new FormControl(null, [Validators.required]),
            description : new FormControl(null, [Validators.required])
        });
    }

    // check if form field is valid
    valid(f: any) {
        // validate when the submit button is pressed and
        // there are no user input (change) event.
        if (this.submitted && !this.form.get(f).dirty) { return false; }
        // validate for each user input (change)
        return !(!this.form.get(f).valid && this.form.get(f).touched);
    }

    // check if the form field has an error
    hasError(f: any, e: any) {
        return this.form.get(f).hasError(e) && this.form.get(f).touched;
    }
}
