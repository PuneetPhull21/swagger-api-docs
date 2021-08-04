var express = require("express");
var router = express.Router();
const controller = require("../controller/controller");

const verify = require('../middleware/JWTverfiytoken,');

/**
 * @swagger
 *   components:
 *     schemas:
 *      User:
 *       type: object
 *       properties:
 *            id:
 *             type: integer
 *             description: The user ID.
 *             example: 0
 *            name:
 *                 type: string
 *                 
 *                 example: Tony Stark.
 *            email:
 *                 type: string
 *                 description: The user's email.
 *                 example: Tony@gmail.com.
 *            dob:
 *                type: integer
 *                description: The user's Date of birth.
 *                example: 11/02/2000.
 *            password:
 *                    type: string,
 *                    description: Enter the password
 *                    expamle: Tony@123  
 */

//login

/**
 * @swagger
 *   components:
 *     schemas:
 *      Login:
 *       type: object
 *       properties:
 *            email:
 *                 type: string
 *                 description: The user's email.
 *                 example: Tony@gmail.com.
 *            password:
 *                    type: string,
 *                    description: Enter the password
 *                    expamle: Tony@123  
 */

//update schema

/**
 * @swagger
 *   components:
 *     schemas:
 *      updateUser:
 *       type: object
 *       properties:
 *            
 *            name:
 *                 type: string
 *                 
 *                 example: Tony Stark.
 *            email:
 *                 type: string
 *                 description: The user's email.
 *                 example: Tony@gmail.com.
 *            dob:
 *                type: integer
 *                description: The user's Date of birth.
 *                example: 11/02/2000.
 *              
 */


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: register the users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User' 
*/

router.post("/register", controller.adduser);

/**
 * @swagger
 * /alluser:
 *   get:
 *     summary: List of all the user.
 *     description: Get the list of user
 *     responses:
 *       200:
 *         description: register the users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User' 
*/

router.get('/alluser',controller.fetchuser);


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: register the users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Login' 
*/

router.post('/login',controller.userlogin);



/**
 * @swagger
 * /user:
 *   get:
 *     security:
 *	     - jwt: []
 *     responses:
 *       200:
 *         description: register the users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User' 
*/
 
router.get('/user',verify.verfiytoken,controller.fetchsingleuser);

/**
 * @swagger
 * /deleteuser:
 *   delete:
 *     security:
 *	     - jwt: []
 *     responses:
 *       200:
 *         description: Delete the User.
 *         
 *             
*/
router.delete('/deleteuser',verify.verfiytoken,controller.deleteuser);

//updateuser 
/**
 * @swagger
 * /updateuser:
 *   put:
 *     security:
 *	     - jwt: []
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateUser'
 *     responses:
 *       200:
 *         description: update the user's.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/updateUser' 
*/

router.put('/updateuser',verify.verfiytoken,controller.updatesingleuser);

router.post('/adddetails',verify.verfiytoken,controller.adddetails);

module.exports = router;
