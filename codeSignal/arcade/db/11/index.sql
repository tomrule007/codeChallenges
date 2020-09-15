CREATE PROCEDURE suspectsInvestigation()
BEGIN
    SELECT id, name, surname
    FROM Suspect
    where height <= 170 AND lower(LEFT(name, 1)) = 'b' AND surname LIKE 'Gre_n'
    ORDER BY id;
END