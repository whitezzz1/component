import type { Plugin } from 'vue'
import { Avatar } from './avatar'
import { Button } from './button'
import { Link } from './link'

const plugins: Plugin[] = [Link, Button, Avatar]

export default plugins
