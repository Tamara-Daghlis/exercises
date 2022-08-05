let names = users
    .map((u) => {
        return u.name;
    })
    .filter((n) => n.startsWith("C"));