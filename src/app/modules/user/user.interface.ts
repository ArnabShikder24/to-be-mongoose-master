export interface IUser {
   id: string;
   name: {
      firstName: string;
      middleName?: string;
      lastName: string;
   };
   role: "Admin" | "Developer" | "UI/UX" | "Project Manager";
   dateofBirth: string;
   email: string;
   gender: "Male" | "Female";
   contactNo: string;
   address: string;
};

export interface IUserMethods {
   fullName(): string;
}