export class Customer {
    public customer: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public isTrialUser: boolean;
    public userName: string;
    public roles: Array<boolean>;

    constructor() {
        this.roles = [];
    }

    /**
     * Getter $customer
     * @return {string}
     */
	public get $customer(): string {
		return this.customer;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $isTrialUser
     * @return {boolean}
     */
	public get $isTrialUser(): boolean {
		return this.isTrialUser;
	}

    /**
     * Getter $userName
     * @return {string}
     */
	public get $userName(): string {
		return this.userName;
	}

    /**
     * Getter $roles
     * @return {Array<boolean>}
     */
	public get $roles(): Array<boolean> {
		return this.roles;
	}

    /**
     * Setter $customer
     * @param {string} value
     */
	public set $customer(value: string) {
		this.customer = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $isTrialUser
     * @param {boolean} value
     */
	public set $isTrialUser(value: boolean) {
		this.isTrialUser = value;
	}

    /**
     * Setter $userName
     * @param {string} value
     */
	public set $userName(value: string) {
		this.userName = value;
	}

    /**
     * Setter $roles
     * @param {Array<boolean>} value
     */
	public set $roles(value: Array<boolean>) {
		this.roles = value;
	}

   
}