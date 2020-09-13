DROP TABLE IF EXISTS Projects;

CREATE TABLE Projects
(
    internal_id INT NOT NULL,
    -- the company's internal identifier for the project;
    project_name VARCHAR(50) NOT NULL,
    -- the official name of the project;
    team_size INT NOT NULL,
    -- the number of employees working on the project;
    team_lead VARCHAR (50) NOT NULL,
    -- -- the name of the project manager;
    income INT NOT NULL,
    -- the average monthly income of the project.
    PRIMARY KEY (internal_id)
);

INSERT INTO Projects
VALUES
    (1384, "MapReduce", 100	, "Jeffrey Dean", 0),
    (2855, "Windows"	, 1000	, "Bill Gates"	, 100500),
    (5961, "Snapchat", 3	, "Evan Spiegel", 2000)