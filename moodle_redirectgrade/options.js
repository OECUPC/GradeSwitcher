$(function(){chrome.storage.sync.get(["grade","semester"], function(result){
		document.querySelector("#msg-grade").innerText = `now set grade:${result.grade}.`;
		let ret ="";
		if(result.semester==0)
		{
			ret = "前期";
		}
		else if(result.semester==1)
		{
			ret = "後期";
		}
		document.querySelector("#msg-semester").innerText = `now set semester:${ret}.`;
	});
});
document.querySelectorAll(".grade").forEach((elm) => {
		elm.addEventListener("click", (e) => {
			const grade = e.target.value;
			chrome.storage.sync.set({"grade":grade});
			document.querySelector("#msg-grade").innerText = `new set grade:${grade}.`;
	});
});

document.querySelectorAll(".semester").forEach((elm) => {
	elm.addEventListener("click", (e) => {
		const semester = e.target.value;
		chrome.storage.sync.set({"semester":semester});
		document.querySelector("#msg-semester").innerText = `new set semester:${e.target.innerText}.`;
	});
});