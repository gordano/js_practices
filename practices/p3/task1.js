const MoneyBox = function (){
    this.coins = 0

    this.getAmount = () => {
        console.log(this.coins)
    }

    this.addCoin = () => {
        this.coins++
    }
}



const box = new MoneyBox()
box.getAmount(); // 0
box.addCoin();
box.addCoin();
box.getAmount(); // 2