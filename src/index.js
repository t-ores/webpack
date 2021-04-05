import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@assets/webpack-logo.png'
import '@styles/styles.css'
import '@styles/less.less'
import '@styles/scss.scss'
import './babel'

/*
import json from '@assets/json.json'
import lardi from '@assets/lardi-trans.json'
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'

console.log('Post to String', post.toString())
console.log('JSON: ', json)
console.log('XML: ', xml)
console.log('csv: ', csv)
console.log('Lardi-Trans: ',lardi)
*/

const post = new Post('WebPack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())