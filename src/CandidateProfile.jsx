export const CandidateProfile = () => {
    const name = "Peter Parker";
    const Role = "Web Developer";
    const yearsOfExperience = 5;
    const isAvailable = true;
    return(
        <>
        <h2>{name}</h2>
        <p> {Role} with {yearsOfExperience} Year of Experience </p>
        <p> started in {2026 - yearsOfExperience}</p>
        <p> status: {isAvailable ? "Available for hire" : "Not Available"}</p>
        <p> contact: {name.toLowerCase().replace("",".")}@gmail.com</p>
        </>
    );
};