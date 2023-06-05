const resources = [
    {
        title: "week 1 title",
        days: [
            "do this work on day 1",
            "do this work on day 2",
            "do this work on day 3",
            "do this work on day 4"
        ]
    },
    {
        title: "week 2 title",
        days: [
            "do this work on day 1",
            "do this work on day 2",
            "do this work on day 3",
            "do this work on day 4"
        ]
    },
    {
        title: "week 3 title",
        days: [
            "do this work on day 1",
            "do this work on day 2",
            "do this work on day 3",
            "do this work on day 4"
        ]
    },
    {
        title: "week 4 title",
        days: [
            "do this work on day 1",
            "do this work on day 2",
            "do this work on day 3",
            "do this work on day 4"
        ]
    },
    {
        title: "week 5 title",
        days: [
            "do this work on day 1",
            "do this work on day 2",
            "do this work on day 3",
            "do this work on day 4"
        ]
    },
    {
        title: "week 6 title",
        days: [
            "do this work on day 1",
            "do this work on day 2",
            "do this work on day 3",
            "do this work on day 4"
        ]
    }
]

const holder = document.querySelector("#holder");

resources.forEach(function(week, i) {

    const details = document.createElement('details');

    const summaryElement = document.createElement('summary');
    summaryElement.classList.add('week-row');

    const week_header = document.createElement('h2');
    week_header.textContent = `Week ${i + 1}`
    summaryElement.appendChild(week_header);

    const week_title = document.createElement('p');
    week_title.textContent = week.title;
    summaryElement.appendChild(week_title);

    details.appendChild(summaryElement);

    week.days.forEach(function(day, i){

        const day_holder = document.createElement('div');
        day_holder.classList.add("day-row")

        const day_title = document.createElement('p');
        day_title.textContent = `Day ${i + 1}`;
        day_holder.appendChild(day_title);

        const day_desc = document.createElement('p');
        day_desc.textContent = day;
        day_holder.appendChild(day_desc);

        details.appendChild(day_holder)
    })

    holder.appendChild(details);
});

