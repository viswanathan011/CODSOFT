x=document.getElementById("in");
        function send(i)
        {
           
            switch (i){
                case 1:
                    x.value+= 1;
                    break;
                case 2:
                    x.value+= 2;
                    break;
                case 3:
                    x.value+= 3;
                    break;
                case 4:
                    x.value+= 4;
                    break;  
                case 5:
                    x.value+= 5;
                    break;
                case 6:
                    x.value+= 6;
                    break;
                case 7:
                    x.value+= 7;
                    break; 
                case 8:
                    x.value+= 8;
                    break;
                case 9:
                    x.value+= 9;
                    break; 
                case 0:
                    x.value+= 0;
                    break;
                case "/":
                    x.value+= '/';
                    break;
                case '+':
                    x.value+= '+';
                    break;
                case '-':
                    x.value+= '-';
                    break;
                case '*':
                    x.value+= '*';
                    break;
                case 'clear':
                    x.value="";
                    break;  
                case '=':
                    result=eval(x.value)
                    x.value=result;
                    break;       
            }
        }
