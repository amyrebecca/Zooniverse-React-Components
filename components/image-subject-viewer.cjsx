React                         = require 'react'
{Router, Routes, Route, Link} = require 'react-router'
example_subjects              = require '../lib/example_subject.json'
$                             = require '../lib/jquery-2.1.0.min.js'

module.exports = 

# the top-level component
ImageSubjectViewer = React.createClass
  displayName: 'ImageSubjectViewer'

  render: ->
    <div className="image-subject-viewer">
      <h1>Image Subject Viewer</h1>
      <ImageContainer url="https://api.zooniverse.org/projects/galaxy_zoo/groups/50251c3b516bcb6ecb000002/subjects?limit=5" />
      <MarkingSurface />
      <Link to="root">Go back.</Link>
    </div>

ImageContainer = React.createClass
  displayName: 'ImageContainer'
  getInitialState: ->
    console.log 'getInitialState()'
    subjects: []

  componentDidMount: ->
    console.log 'componentDidMount()'
    $.ajax
      url: @props.url
      dataType: "json"
      success: ((data) ->
        @setState subjects: data
        console.log 'EXAMPLE_SUBJECTS: ', data
        return
      ).bind(this)
      error: ((xhr, status, err) ->
        console.log 'ERROR! Could not load subject.'
        # console.error @props.url, status, err.toString()
        return
      ).bind(this)
    return

  render: ->
    console.log 'render()', @state.subjects[0]
    <div>
      <h3>This is the image</h3>
      <img src={@state.subjects[0].location.standard} />
    </div>

# NOT BEING USED (YET!)
MarkingSurface = React.createClass
  displayName: 'MarkingSurface'
  render: ->
    <div>
      <h3>This is the marking surface</h3>
    </div>

window.React = React