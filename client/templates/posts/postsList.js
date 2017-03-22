var postsData = [
  {
    title: "Introduction to Telescope",
    url:'http://introductiontotelescope.com'
  },
  {
    title: "Meteor",
    url:'http://meteor.com'
  },
  {
    title: "The book of Meteor",
    url:'http://thebookofmeteor.com'
  }
]

Template.postsList.helpers({
  posts: postsData
})
