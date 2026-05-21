const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	    let price = document.querySelectorAll(".price")
	    let table = document.querySelector("table")
	let sum =0;
	price.forEach((price)=>{
		sum += Number(price.textContent)
		})
	let tr = document.createElement("tr")
	let td = document.createElement("td")
	td.textContent = "Total Price " + sum;
	tr.appendChild(td)
	table.appendChild(tr)
	
};

getSumBtn.addEventListener("click", getSum);

