/**Used interface, because it can be extended with heirs and gives flexibility through substitution.
 * Modifiers are public (by default) because they cannot be protected or private in the interface.*/
interface UserProperties {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
}

class AdminProperties implements UserProperties {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;

    accessLevel: AccessLevel;
}

class ModeratorProperties implements UserProperties {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;

    numberOfReports: number;
}

enum Role {
    user = "USER",
    moderator = "MODERATOR",
    admin = "ADMIN",
}

enum AccessLevel {
    low = 1,
    mid = 2,
    high = 3,
}

/** The modifier "protected" avoids access from other classes except for heirs.
 * The modifier "public" allows editing protected fields and getting values.*/
abstract class User {
    protected properties: UserProperties;

    protected constructor(properties: UserProperties) {
        this.properties = properties;
    }

    public abstract editProfile(newFirstName: string, newLastName: string,
                                newEmail: string, newPassword?: string): void;

    public abstract viewInfo();
}

/** The modifier "private" completely encapsulates the field and avoids modification from other places in the code. */
class Admin extends User {
    private accessLevel: AccessLevel;

    constructor(properties: AdminProperties) {
        super(properties);
        this.accessLevel = properties.accessLevel;
    }

    public editProfile(newFirstName: string, newLastName: string,
                       newEmail: string, newPassword: string): void {
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
    }

    public viewInfo() {
        let info = {
            firstName: this.properties.firstName,
            lastName: this.properties.lastName,
            email: this.properties.email,
            password: this.properties.password,
            role: this.properties.role,
        }
        return JSON.stringify(info);
    }

    public setAccessLevel(accessLevel: AccessLevel): void {
        this.accessLevel = accessLevel;
    }

    public getAccessLevel(): AccessLevel {
        return this.accessLevel;
    }
}

/** The modifier "private" completely encapsulates the field and avoids modification from other places in the code. */
class Moderator extends User {
    private numberOfReports: number;

    constructor(properties: ModeratorProperties) {
        super(properties);
        this.numberOfReports = properties.numberOfReports;
    }

    public editProfile(newFirstName: string, newLastName: string,
                       newEmail: string): void {
        if (newFirstName != undefined) {
            this.properties.firstName = newFirstName;
        }
        if (newLastName != undefined) {
            this.properties.lastName = newLastName;
        }
        if (newEmail != undefined) {
            this.properties.email = newEmail;
        }
    }

    public viewInfo() {
        let info = {
            firstName: this.properties.firstName,
            lastName: this.properties.lastName,
            email: this.properties.email,
            role: this.properties.role,
        }
        return JSON.stringify(info);
    }

    public setNumberOfReports(numberOfReports: number): void {
        this.numberOfReports = numberOfReports;
    }

    public getNumberOfReports(): number {
        return this.numberOfReports;
    }

}

//Verification:
let adminProperties = new AdminProperties();
adminProperties.firstName = "adminName";
adminProperties.lastName = "adminLastName";
adminProperties.email = "admin@test.com";
adminProperties.password = "password";
adminProperties.role = Role.admin;

const admin = new Admin(adminProperties);

console.log(admin);
console.log("Start: " + admin.viewInfo());

console.log("Get AccessLevel: " + admin.getAccessLevel());
admin.setAccessLevel(AccessLevel.low);
console.log("Changed AccessLevel: " + admin.getAccessLevel());

admin.editProfile("newName", "newLastName", "newEmail", "newPassword");
console.log("Edited profile: " + admin.viewInfo());


let moderatorProperties = new ModeratorProperties();
moderatorProperties.firstName = "moderatorName";
moderatorProperties.lastName = "moderatorLastName";
moderatorProperties.email = "moderator@test.com";
moderatorProperties.password = "moderatorPassword";
moderatorProperties.role = Role.moderator;

const moderator = new Moderator(moderatorProperties);

console.log(moderator);
console.log("Start: " + moderator.viewInfo());

console.log("Get numberOfReports: " + moderator.getNumberOfReports());
moderator.setNumberOfReports(5);
console.log("Changed AccessLevel: " + moderator.getNumberOfReports());

moderator.editProfile("newModeratorName", "newModeratorLastName", "newModeratorEmail");
console.log("Edited profile: " + moderator.viewInfo());
