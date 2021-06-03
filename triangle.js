function triangle(n){
    let x = new Array(n);
    
    let result= '';
        for (let i = 1; i <= n; i++) {
            x[i] = new Array();
                for (let j = 1; j <= i; j++) {
                    if (j == 1 || j == i) {
                        x[i][j]=1;
                    } else {
                        x[i][j] = x [i - 1][j - 1]+ x[i - 1][j];
                    }
                    result +=  x[i][j] + ' ';
                }
                result += "\n";
        }
        
 console.log(result);
}

triangle(4)