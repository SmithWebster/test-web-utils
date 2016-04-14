/* list of employees who receive salary greater than the direct supervisor's salary */
select e.* from employee as e inner join employee as e2 on e.chief_id = e2.id where e.salary > e2.salary;

/* list of employees who receive the maximum salary in his department */
select * from employee as e1 where salary = (select max(salary) from employee as e2 where department_id = e1.department_id) group by department_id;

/* list of employees who do not have a designated supervisor working in the same department */
select * from employee where chief_id is null group by department_id;

/* list of departments sorted by total salary of employees in it, descending */
select d.* from department as d inner join employee as e on d.id = e.department_id group by e.department_id order by sum(e.salary) desc;

