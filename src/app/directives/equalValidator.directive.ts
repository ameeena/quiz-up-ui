import {Directive,forwardRef,Attribute} from '@angular/core';
import {Validator,NG_VALIDATORS,AbstractControl} from '@angular/forms';


@Directive({
    selector:`[validateEqual][formControlName],[validateEqual]
    [formControl],[validateEqual][ngModel] `,
    providers:[{
        provide:NG_VALIDATORS,useExisting: forwardRef(() => EqualValidator),multi:true
    }]
})
export class EqualValidator implements Validator{
   
    constructor(@Attribute('validateEqual') public validateEqual:string,
    @Attribute('reverse') public reverse:string){      
    }

    private get isReverse(){
        if(!this.reverse) return false;
        return this.reverse=='true'?true:false;
    }
    validate(inputValue:AbstractControl):{ [key:string]:any}
    {
       
        let value1=inputValue.value;          
        let value2=inputValue.root.get(this.validateEqual);       
       if(value1 !== null && value2 !== null ){
            if(value1&& value2 !== value2.value  && !this.isReverse) 
        return  {        
                    validateEqual:false
                }       
     
        // value equal and reverse
        if (value1=== value2.value && this.isReverse) {            
            delete value2.errors['validateEqual'];
            if (!Object.keys(value2.errors).length) value2.setErrors(null);
        }
            // value not equal and reverse
        if (value2 && value1 !== value2.value && this.isReverse) {            
            value2.setErrors({ validateEqual: false });
        }
       }
       
        return null;
    }
}