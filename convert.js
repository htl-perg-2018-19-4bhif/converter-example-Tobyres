let entities = {};
entities["kg"] = { "type": 1, "order": 2, "kg": 1, "g": 1000 };
entities["g"] = { "type": 1, "order": 1, "g": 1, "kg": 1000 };
entities["m"] = { "type": 2, "order": 3, "m": 1, "cm": 100, "mm": 1000 };
entities["cm"] = { "type": 2, "order": 2, "cm": 1, "m": 100, "mm": 10 };
entities["mm"] = { "type": 2, "order": 1, "mm": 1, "cm": 10, "m": 1000 };
if ((process.argv.length === 6) && (process.argv[4] === "to") && (typeof (entities[process.argv[3]]) != "undefined") && (typeof (entities[process.argv[5]]) != "undefined") && (entities[process.argv[3]].type === entities[process.argv[5]].type)) {
    if (entities[process.argv[3]].order > entities[process.argv[5]].order) {
        console.log(process.argv[2] + " " + process.argv[3] + " are " + (parseInt(process.argv[2]) * entities[process.argv[3]][process.argv[5]]) + " " + process.argv[5]);
    }else {
        console.log(process.argv[2] + " " + process.argv[3] + " are " + (parseInt(process.argv[2]) / entities[process.argv[3]][process.argv[5]]) + " " + process.argv[5]);
    }
} else {
    console.log("Invalid Parameter");
}