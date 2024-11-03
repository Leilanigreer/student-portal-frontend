
export function StudentProfileIndex() {
  const personal_info = [
    {id:1, first_name: "Bob", last_name:"Johnson", email: "bob.jonson@email.com", phone_number: "000-111-2222", short_bio: "A great persona with a great personality and has goals that will drive their work.", linkedin_url: "linkedin.com", twitter_handle: "@BobTheBuilder", website_url: "bobthebuilder.com", resume_url: "resumeurlhere.com", github_url: "personalgithubpage.com", profile_image: "https://static.wikia.nocookie.net/btb/images/c/cf/CGI_BOB.png/revision/latest/scale-to-width/360?cb=20221001033806"}
  ]
  return (
    <div>
      <h1>Student Profile Page with Personal Info</h1>
      {personal_info.map((info) => (
        <div key={info.id}>
      <h2>First Name: {info.first_name}</h2>
      <p>Last Name: {info.last_name}</p>
      <p>Email: {info.email}</p>
      <p>Phone Number: {info.phone_number}</p>
      <p>Short Bio: {info.short_bio}</p>
      <p>LinkedIn URL: {info.linkedin_url}</p>
      <p>Twitter Handle: {info.twitter_handle}</p>
      <p>Website URL: {info.website_url}</p>
      <p>Resume URL: {info.resume_url}</p>
      <p>Github URL: {info.github_url}</p>
      <p>Profile Image: {info.profile_image}</p>
      <form>
         <div>
           Phone Number: <input defaultValue={info.phone_number} name="Phone Number" type="text" />
         </div>
         <div>
           Short Bio: <input defaultValue={info.short_bio} name="Short Bio" type="text" />
         </div>
         <div>
           LinkedIn URL: <input defaultValue={info.linkedin_url} name="LinkedIn URL" type="text" />
         </div>
         <div>
           Twitter Handle: <input defaultValue={info.twitter_handle} name="Twitter Handle" type="text" />
         </div>
         <div>
           Website URL: <input defaultValue={info.website_url} name="Website URL" type="text" />
         </div>
         <div>
           Online Resume: <input defaultValue={info.resume_url} name="Resume URL" type="text" />
         </div>
         <div>
           Github URL: <input defaultValue={info.github_url} name="Github URL" type="text" />
         </div>
         <div>
           Profile Image: <input defaultValue={info.profile_image} name="Profile Image" type="text" />
         </div>
         <button type="submit">Update</button>
       </form>
      </div>
      ))}
    </div>
  );
}