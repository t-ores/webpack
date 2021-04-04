import * as $ from 'jquery'
import Post from '@models/Post'
import json from '@assets/json.json'
import lardi from '@assets/lardi-trans.json'
import WebpackLogo from '@assets/webpack-logo.png'
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'
import '@styles/styles.css'


const post = new Post('WebPack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

// console.log('Post to String', post.toString())
// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('csv: ', csv)
//console.log('Lardi-Trans: ',lardi)