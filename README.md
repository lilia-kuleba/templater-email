# Test task: Email-templater

[DEMO LINK](https://lilia-kuleba.github.io/templater-email/)

## Task

The goal is to create a simple email templating app. It consists of a 3-step wizard: template editor, placeholder form, and preview/sending. 

## Local development

### Installing
* Fork and clone this repository
* Run `npm install` in your terminal
* Run `npm start`

## Used technologies
JS, React, Redux.

## Instruction
[HERE](https://docs.google.com/document/d/1FkHKRy82HTBdYtZSbSeVh7icLqaXthS30Sq1ustpYkc/edit#)

### Functional Requirements
* [UI Design](https://www.figma.com/file/HcQ8uMVeTyrDldblY5Axou/Email-Templater?node-id=0%3A1), it’s pixel perfect, please try to match it as much as possible.
* In template editor, user is expected to enter a text with placeholders (variables) like this: {name}. Placeholders start with “{“, followed by any number of english letters and end with “}”. Spaces or any other characters are not allowed, so “{ name,}” is not a valid placeholder.
NOTE: placeholders are not static, users can add as many of them as they want. Don’t rely on just {subject} {date} that are present on figma designs, there may be 10 or 20 of those placeholders.
* On the second step, the user should have a possibility to enter a value for each placeholder found in the template (which means that form should be dynamically generated).
* On the third step, the user should be able to preview the generated email, where all placeholders are replaced with the values entered by the user on the second step. In order to send an email, send a POST request to this endpoint:  https://mock.at.leanylabs.com/email
The payload should look like this:
{
   "to": "hr@leanylabs.com",
   "subject": "NY Party",
   "body": "the actual body of the email"
}
In case of success, the server will respond with 200 and will send the request body back in “echo” property.
NOTE: server will return 500 or 200 status code randomly (50% chance each). It’s done intentionally, so that you can test that your app handles errors properly.
* In case of a successful response from the server, show a success message. The message should be visible for 5 seconds, then disappear.
* In case of an error response from the server, show an error message (also for 5 seconds).
* BONUS: make the app work correctly if one of the values is the same as the placeholder name. For example we have the following template: “let’s swap {one} and {two}, so that we get {two} and {one}”, and we set the value for “{one}” = “{two}”, and value for “{two}” = “{one}”, the result should be:  “let’s swap {two} and {one}, so that we get {one} and {two}”.
