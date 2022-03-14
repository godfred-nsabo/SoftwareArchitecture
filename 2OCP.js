/**
 * The Open-Closed Principle
 * Software entities such as classes, modules, functions etc
 * should be open for extension but closed for modification
 *
 * ========There are two primary attributes in the OCP, they are.========
 *
 * Open for extension — we are able to extend what the module does.
 * Closed for modification — extending the behavior of a module does not result in
 * changes to the source or binary code of the module.
 *
 * So, how to implement the OCP?
 *
 * Let assume that every employee has a role and granted privileges.
 * But how if we introduce a new role to the system and don’t modify existing things.
 * So rather we can do like the below example to make it pass the OCP.
 *
 * */

let allowedRoles = ["CEO", "CTO", "CFO", "STAFF"];

const checkPrivilege = (employee) => {
  if (allowedRoles.includes(employee.role)) {
    // meaning employee has privileged role
    return true;
  } 
};
const addRoles = (role) => {
  allowedRoles.push(role);
};

/**
 * 
 * So as the above example, we don’t have to modify the 
 * existing code rather we can extend it to add a new role. 
 * The OCP is one of the driving forces behind the architecture of systems. 
 * The goal is to make the system easy to extend without 
 * incurring a high impact of change.
 */

// A module is