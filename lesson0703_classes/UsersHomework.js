var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AdminProperties = /** @class */ (function () {
    function AdminProperties() {
    }
    return AdminProperties;
}());
var ModeratorProperties = /** @class */ (function () {
    function ModeratorProperties() {
    }
    return ModeratorProperties;
}());
var Role;
(function (Role) {
    Role["user"] = "USER";
    Role["moderator"] = "MODERATOR";
    Role["admin"] = "ADMIN";
})(Role || (Role = {}));
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["low"] = 1] = "low";
    AccessLevel[AccessLevel["mid"] = 2] = "mid";
    AccessLevel[AccessLevel["high"] = 3] = "high";
})(AccessLevel || (AccessLevel = {}));
/** The modifier "protected" avoids access from other classes except for heirs.
 * The modifier "public" allows editing protected fields and getting values.*/
var User = /** @class */ (function () {
    function User(properties) {
        this.properties = properties;
    }
    return User;
}());
/** The modifier "private" completely encapsulates the field and avoids modification from other places in the code. */
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(properties) {
        var _this = _super.call(this, properties) || this;
        _this.accessLevel = properties.accessLevel;
        return _this;
    }
    Admin.prototype.editProfile = function (newFirstName, newLastName, newEmail, newPassword) {
        if (newFirstName != undefined) {
            this.properties.firstName = newFirstName;
        }
        if (newLastName != undefined) {
            this.properties.lastName = newLastName;
        }
        if (newEmail != undefined) {
            this.properties.email = newEmail;
        }
        if (newPassword != undefined) {
            this.properties.password = newPassword;
        }
    };
    Admin.prototype.viewInfo = function () {
        var info = {
            firstName: this.properties.firstName,
            lastName: this.properties.lastName,
            email: this.properties.email,
            password: this.properties.password,
            role: this.properties.role
        };
        return JSON.stringify(info);
    };
    Admin.prototype.setAccessLevel = function (accessLevel) {
        this.accessLevel = accessLevel;
    };
    Admin.prototype.getAccessLevel = function () {
        return this.accessLevel;
    };
    return Admin;
}(User));
/** The modifier "private" completely encapsulates the field and avoids modification from other places in the code. */
var Moderator = /** @class */ (function (_super) {
    __extends(Moderator, _super);
    function Moderator(properties) {
        var _this = _super.call(this, properties) || this;
        _this.numberOfReports = properties.numberOfReports;
        return _this;
    }
    Moderator.prototype.editProfile = function (newFirstName, newLastName, newEmail) {
        if (newFirstName != undefined) {
            this.properties.firstName = newFirstName;
        }
        if (newLastName != undefined) {
            this.properties.lastName = newLastName;
        }
        if (newEmail != undefined) {
            this.properties.email = newEmail;
        }
    };
    Moderator.prototype.viewInfo = function () {
        var info = {
            firstName: this.properties.firstName,
            lastName: this.properties.lastName,
            email: this.properties.email,
            role: this.properties.role
        };
        return JSON.stringify(info);
    };
    Moderator.prototype.setNumberOfReports = function (numberOfReports) {
        this.numberOfReports = numberOfReports;
    };
    Moderator.prototype.getNumberOfReports = function () {
        return this.numberOfReports;
    };
    return Moderator;
}(User));
var adminProperties = new AdminProperties();
adminProperties.firstName = "adminName";
adminProperties.lastName = "adminLastName";
adminProperties.email = "admin@test.com";
adminProperties.password = "password";
adminProperties.role = Role.admin;
var admin = new Admin(adminProperties);
console.log(admin);
console.log("Start: " + admin.viewInfo());
console.log("Get AccessLevel: " + admin.getAccessLevel());
admin.setAccessLevel(AccessLevel.low);
console.log("Changed AccessLevel: " + admin.getAccessLevel());
admin.editProfile("newName", "newLastName", "newEmail", "newPassword");
console.log("Edited profile: " + admin.viewInfo());
var moderatorProperties = new ModeratorProperties();
moderatorProperties.firstName = "moderatorName";
moderatorProperties.lastName = "moderatorLastName";
moderatorProperties.email = "moderator@test.com";
moderatorProperties.password = "moderatorPassword";
moderatorProperties.role = Role.moderator;
var moderator = new Moderator(moderatorProperties);
console.log(moderator);
console.log("Start: " + moderator.viewInfo());
console.log("Get numberOfReports: " + moderator.getNumberOfReports());
moderator.setNumberOfReports(5);
console.log("Changed AccessLevel: " + moderator.getNumberOfReports());
moderator.editProfile("newModeratorName", "newModeratorLastName", "newModeratorEmail");
console.log("Edited profile: " + moderator.viewInfo());
