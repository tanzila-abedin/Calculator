*, *::before, *::after {
     box-sizing: border-box;
     font-family: Georgia, 'Times New Roman', Times, serif;
     font-weight: normal;
    
 }
 
     


 body{
     padding: inherit;
     margin: inherit;
     background: linear-gradient(to right, skyblue, #f1f3f2);

    } 
    


.calculator-grid {
    display: grid;
    justify-content: center;
    align-content: center;
    min-height: 100vh;
    grid-template-columns: repeat(5,80px);
    grid-template-rows: minmax(120px,auto) repeat(4, 90px);
}

.calculator-grid > button {
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.384);
    outline: none;
    background-color: rgba(214, 210, 210, 0.75);
}

.calculator-grid > button:hover {
    background-color: rgb(135, 206, 235);

}

.span-two {
    grid-column: span 2;
}

.span-one {
    grid-row: span 2;
}
.output {
    grid-column: 1/-1;
    background-color: rgba(58, 57, 57, 0.75);
    display: flex ;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
}


.output .previous-operand {
    color: rgba(255, 255, 255, .75);
    font-size: 1.5rem;
}

.output .current-operand {
    color: white;
    font-size: 2.5rem;
}



