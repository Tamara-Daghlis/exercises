let mapedUsers = users.map((u) => {
    return { email: u.email, companyName: u.company.name };
});

