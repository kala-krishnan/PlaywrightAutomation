function printingValues(empName, empRollNO, empPhone, options) {
    console.log("name : " + empName + "empRollNO : " + empRollNO + "empPhone :" + empPhone + "Address : " + (options === null || options === void 0 ? void 0 : options.empAddress)
        + "State : " + (options === null || options === void 0 ? void 0 : options.empState));
}
printingValues("Kala", 14, 909090909, { empAddress: "Vilathi", empState: "TamilNadu" });
