export default function NewUserForm() {
    return (
        <div>
            <h3>New User Form</h3>
            <form>
                <lable>First Name</lable>
                <input type="text" />
                <br />
                <lable>Last Name</lable>
                <input type="text" />
                <br />
                <lable>Email</lable>
                <input type="email" />
                <br />
                <lable>Password</lable>
                <input type="password" />
            </form>
        </div>
    );
}