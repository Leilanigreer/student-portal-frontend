import { useLoaderData } from "react-router-dom";
import axios from "axios";
export function StudentProfileIndex() {
  const students_extra_data = useLoaderData ();
  const students = students_extra_data.data;
  // const students = [
  //   {id:1, first_name: "Bob", last_name:"Johnson", email: "bob.jonson@email.com", phone_number: "000-111-2222", short_bio: "A great persona with a great personality and has goals that will drive their work.", linkedin_url: "linkedin.com", twitter_handle: "@BobTheBuilder", website_url: "bobthebuilder.com", resume_url: "resumeurlhere.com", github_url: "personalgithubpage.com", profile_image: "https://static.wikia.nocookie.net/btb/images/c/cf/CGI_BOB.png/revision/latest/scale-to-width/360?cb=20221001033806"}
  // ]
  console.log(students)

  const handleSubmit = (event) =>{
    event.preventDefault();
    const params = new FormData(event.target);

    axios.patch("http://localhost:3000/students/${id}.json", params)
    .then((response) => {
      // setStudents(
        students.map((student) => {
          if (student.id === response.data.id) {
            return response.data;
          } else {
            return student;
          }
        })
      // );
      // successCallback();
      
    })
  };

  return (
    <div>
      <h1>Student Profile Page with Personal Info</h1>
      {students.map((student) => (
        <div key={student.id}>
      <h2>First Name: {student.first_name}</h2>
      <p>Last Name: {student.last_name}</p>
      <p>Email: {student.email}</p>
      <p>Phone Number: {student.phone_number}</p>
      <p>Short Bio: {student.short_bio}</p>
      <p>LinkedIn URL: {student.linkedin_url}</p>
      <p>Twitter Handle: {student.twitter_handle}</p>
      <p>Website URL: {student.website_url}</p>
      <p>Resume URL: {student.resume_url}</p>
      <p>Github URL: {student.github_url}</p>
      <p>Profile Image: {student.profile_image}</p>
      <form onSubmit={handleSubmit}>
         <div>
           Phone Number: <input defaultValue={student.phone_number} name="Phone Number" type="text" />
         </div>
         <div>
           Short Bio: <input defaultValue={student.short_bio} name="Short Bio" type="text" />
         </div>
         <div>
           LinkedIn URL: <input defaultValue={student.linkedin_url} name="LinkedIn URL" type="text" />
         </div>
         <div>
           Twitter Handle: <input defaultValue={student.twitter_handle} name="Twitter Handle" type="text" />
         </div>
         <div>
           Website URL: <input defaultValue={student.website_url} name="Website URL" type="text" />
         </div>
         <div>
           Online Resume: <input defaultValue={student.resume_url} name="Resume URL" type="text" />
         </div>
         <div>
           Github URL: <input defaultValue={student.github_url} name="Github URL" type="text" />
         </div>
         <div>
           Profile Image: <input defaultValue={student.profile_image} name="Profile Image" type="text" />
         </div>
         <button type="submit">Update</button>
       </form>
      </div>
      ))}
    </div>
  );
}