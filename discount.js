function calculateVoucher(voucher, money){
    let discount;
    let minimalPay;
    let change;
    let totalPay;
if (voucher === "DumbWaysJos") {
    minimalPay = 50000;
    if (money < minimalPay){
        console.log("Anda tidak bisa menggunakan Voucher ini karena");
        console.log(`Minimal Bayar untuk Voucher DumbWaysJos adalah ${minimalPay}`);
    }else {

    discount = (money / 100) * 21,1;
    if (discount > 20000){
        discount = 20000;
    }
    totalPay = money-discount;
    change = money - totalPay;
   
    console.log(`Rincian pembayaran untuk Voucher DumbWaysJos dari ${money}`);
    console.log(`Uang yang harus dibayar : ${totalPay}`);
    console.log(`Diskon ${discount}`);
    console.log(`kembalian ${change}`);
    }
    

 } else if (voucher === "DumbWaysMantap"){
    minimalPay = 80000;
    if (money < minimalPay){
        console.log("Anda tidak bisa menggunakan Voucher ini karena");
        console.log(`Minimal Bayar untuk Voucher DumbWaysJos adalah ${minimalPay}`);
    } else {

    discount = (money / 100) * 30;
    if (discount > 40000){
        discount = 40000;
    }
    totalPay = money-discount;
    change = money - totalPay;
    
    console.log(`Rincian pembayaran untuk Voucher DumbWaysMantap dari ${money}`);
    console.log(`Uang yang harus dibayar : ${totalPay}`);
    console.log(`Diskon ${discount}`);
    console.log(`kembalian ${change}`);
 }
}
 

}

calculateVoucher("DumbWaysJos", 100000)