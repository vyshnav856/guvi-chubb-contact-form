// Submitted by: Vyshnav R
// Email: vyshnavr856@gmail.com
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var formElement = document.querySelector("form");
var nameElement = document.querySelector("#name");
var emailElement = document.querySelector("#email");
var phoneElement = document.querySelector("#phone");
var subjectElement = document.querySelector("#subject");
var messageElement = document.querySelector("#message");
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    var nameValue = nameElement.value;
    var emailValue = emailElement.value;
    var phoneValue = phoneElement.value;
    var subjectValue = subjectElement.value;
    var messageValue = messageElement.value;
    var valid = true;
    if (nameValue == "") {
        var alert_1 = document.querySelector(".alert-name");
        alert_1.style.display = "block";
        nameElement.style.borderColor = "#ff0000";
        nameElement.placeholder = "Name is required";
        valid = valid && false;
    }
    if (emailValue == "") {
        var alert_2 = document.querySelector(".alert-email");
        alert_2.style.display = "block";
        emailElement.style.borderColor = "#ff0000";
        emailElement.placeholder = "Email is required";
        valid = valid && false;
    }
    if (phoneValue == "") {
        var alert_3 = document.querySelector(".alert-phone");
        alert_3.style.display = "block";
        phoneElement.style.borderColor = "#ff0000";
        phoneElement.placeholder = "Mobile number is required";
        valid = valid && false;
    }
    if (subjectValue == "") {
        var alert_4 = document.querySelector(".alert-subject");
        alert_4.style.display = "block";
        subjectElement.style.borderColor = "#ff0000";
        subjectElement.placeholder = "Subject is required";
        valid = valid && false;
    }
    if (messageValue == "") {
        var alert_5 = document.querySelector(".alert-message");
        alert_5.style.display = "block";
        messageElement.style.borderColor = "#ff0000";
        messageElement.placeholder = "Message is required";
        valid = valid && false;
    }
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
        var alert_6 = document.querySelector(".alert-email");
        alert_6.style.display = "block";
        emailElement.style.borderColor = "#ff0000";
        valid = valid && false;
    }
    var phoneRegex = /^[123456789]\d{9}$/;
    if (!phoneRegex.test(phoneValue)) {
        var alert_7 = document.querySelector(".alert-phone");
        alert_7.style.display = "block";
        phoneElement.style.borderColor = "#ff0000";
        valid = valid && false;
    }
    if (!valid) {
        alert("Form is invalid, cannot submit!");
    }
    else {
        var submitData = {
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            subject: subjectValue,
            message: messageValue
        };
        var submitResponse = submitForm(submitData);
    }
});
nameElement.addEventListener("input", function (e) {
    var alert = document.querySelector(".alert-name");
    alert.style.display = "none";
    nameElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
});
emailElement.addEventListener("input", function (e) {
    var alert = document.querySelector(".alert-email");
    alert.style.display = "none";
    emailElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
});
phoneElement.addEventListener("input", function (e) {
    var alert = document.querySelector(".alert-phone");
    alert.style.display = "none";
    phoneElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
});
subjectElement.addEventListener("input", function (e) {
    var alert = document.querySelector(".alert-subject");
    alert.style.display = "none";
    subjectElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
});
messageElement.addEventListener("input", function (e) {
    var alert = document.querySelector(".alert-message");
    alert.style.display = "none";
    messageElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
});
function submitForm(submitData) {
    return __awaiter(this, void 0, void 0, function () {
        var endpoint, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = "https://6717f822b910c6a6e02abb38.mockapi.io/api/contact";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(endpoint, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(submitData)
                        })];
                case 2:
                    _a.sent();
                    alert("Form submission successful!");
                    return [2 /*return*/, true];
                case 3:
                    error_1 = _a.sent();
                    alert("Form submission unsuccessful due to API error!");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
