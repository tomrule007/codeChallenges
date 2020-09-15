CREATE PROCEDURE suspectsInvestigation2()
BEGIN
    SELECT id, name, surname
    FROM Suspect
    where height <= 170
        OR name NOT LIKE 'b%'
        OR surname NOT LIKE 'gre_n'
    ORDER BY id;
END