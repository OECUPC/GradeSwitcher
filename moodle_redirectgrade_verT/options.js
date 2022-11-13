$(function(){chrome.storage.sync.get(["grade","semester"], function(result){
		document.querySelector("#msg-grade").innerText = `now set grade:${result.grade}.`;
	});
});
document.querySelectorAll(".grade").forEach((elm) => {
		elm.addEventListener("click", (e) => {
			const grade = e.target.value;
			chrome.storage.sync.set({"grade":grade});
			document.querySelector("#msg-grade").innerText = `new set grade:${grade}.`;
	});
});