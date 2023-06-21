function sendMail(contactForm) {
    emailjs.send("service_igc87j6", "template_3yezko7", {
        from_name: contactForm.name.value,
        project_request: contactForm.emailaddress.value,
        from_email: contactForm.projectsummary.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}