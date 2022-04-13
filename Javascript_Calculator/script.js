class calci{
    constructor(pretext,curtext)
    {
        this.pretext=pretext;
        this.curtext=curtext;
        this.clear();
    }

    clear(){
        this.curope="";
        this.preope="";
        this.operation=undefined;
    }

    delete(){
        this.curope=this.curope.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number==='.' && this.curope.includes('.')) return ;  
        this.curope=this.curope.toString()+number.toString();
    }

    chooseoperation(operation)
    {
        if(this.curope==='') return ;
        if(this.preope!==''){
            this.compute;
        }
        this.operation=operation;
        this.preope=this.curope;
        this.curope='';
        // switch(operation)
        // {
        //     case '+':
        // }
    }

    compute(){
        let computete;
        const pre=parseFloat(this.preope);
        const cur=parseFloat(this.curope);
        if(isNaN(pre)|| isNaN(cur)) return ;
        switch(this.operation){
            case '+':
                computete=pre+cur;
                break;
            case '-':
                computete=pre-cur;
                break;
            case '*':
                computete=pre*cur;
                break;
            case '÷':
                computete=pre/cur;
                break;
            default:
                return ;
        }
        this.curope=computete;
        this.operation=undefined;
        this.preope=" ";
    }

    getdisplayed(number){
        const x=parseFloat(number);
        if(isNaN(x)) return ' ';
        return x.toLocaleString('en');
    }

    updateDisplay(){
        this.curtext.innerText=this.curope;
        if(this.operation  !=null)
        {
            this.pretext.innerText=`${this.getdisplayed(this.preope)} ${this.operation}`    
        }
        else{
            this.pretext.innerText='';
        }
    }



}

const numbers=document.querySelectorAll('[data-number]');
const operations=document.querySelectorAll('[data-operation]');
const equalsbtn=document.querySelector('[data-equals]');
const deletebtn=document.querySelector('[data-delete]');
const allclear=document.querySelector('[data-all-clear]');
const pretext=document.querySelector('[data-previous-operand]');
const curtext=document.querySelector('[data-current-operand]');

const obj = new calci(pretext,curtext);

numbers.forEach(button =>{
    button.addEventListener('click',()=>{
        obj.appendNumber(button.innerText);
        obj.updateDisplay();
    })
})

operations.forEach(button =>{
    button.addEventListener('click',()=>{
        obj.chooseoperation(button.innerText);
        obj.updateDisplay();
    })
})

equalsbtn.addEventListener('click',button=>{
    obj.compute();
    obj.updateDisplay();
})

allclear.addEventListener('click',button=>{
    obj.clear();
    obj.updateDisplay();
})

deletebtn.addEventListener('click',button=>{
    obj.delete();
    obj.updateDisplay();
})

