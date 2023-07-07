import { FC } from 'react'
import { IconProps } from './type'

export const Clock: FC<IconProps> = ({
  height = 32,
  width = 32,
  className = '',
  color = 'currentColor',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fill={color}
        d="M5.708.4c.25-.264.573-.4.96-.4.357 0 .664.136.929.4.265.265.4.58.4.931 0 .386-.135.701-.4.959-.265.257-.58.379-.93.379-.386 0-.701-.122-.958-.38-.25-.25-.38-.572-.38-.958 0-.358.13-.666.38-.93ZM12.82.4c.25-.264.564-.4.95-.4.358 0 .666.136.93.4.265.265.401.58.401.931 0 .386-.136.701-.4.959-.265.257-.58.379-.93.379-.387 0-.702-.122-.96-.38-.25-.25-.378-.572-.378-.958 0-.358.129-.666.379-.93h.007ZM9.264.4c.25-.264.572-.4.951-.4.358 0 .665.136.93.4.265.265.4.58.4.931 0 .386-.135.701-.4.959-.264.257-.58.379-.93.379-.386 0-.7-.122-.958-.38-.25-.25-.38-.572-.38-.958 0-.358.13-.666.38-.93h.007ZM12.82 21.732c.25-.265.571-.401.958-.401.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.701-.122-.959-.38-.25-.25-.38-.572-.38-.958 0-.358.13-.666.38-.93ZM9.264 21.732c.25-.265.572-.401.958-.401.358 0 .666.136.93.4.265.265.4.58.4.93 0 .387-.135.702-.4.96-.264.257-.58.379-.93.379-.386 0-.7-.122-.958-.38-.25-.25-.38-.572-.38-.958 0-.358.13-.666.38-.93ZM11.045 11.063c.25-.265.572-.401.959-.401.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.701-.122-.959-.38-.25-.25-.38-.572-.38-.958 0-.358.13-.666.38-.93ZM11.045 7.07c.25-.265.572-.401.959-.401.357 0 .665.136.93.4.264.265.4.58.4.931 0 .386-.136.701-.4.959-.265.257-.58.38-.93.38-.387 0-.701-.123-.959-.38-.25-.25-.38-.573-.38-.959 0-.358.13-.666.38-.93ZM16.374.4c.25-.264.573-.4.959-.4.358 0 .665.136.93.4.265.265.4.58.4.931 0 .386-.135.701-.4.959-.265.257-.58.379-.93.379-.386 0-.701-.122-.959-.38-.25-.25-.379-.572-.379-.958 0-.358.129-.666.38-.93ZM5.708 21.732c.25-.265.573-.401.96-.401.357 0 .664.136.929.4.265.265.4.58.4.93 0 .387-.135.702-.4.96-.265.257-.58.379-.93.379-.386 0-.701-.122-.958-.38-.25-.25-.38-.572-.38-.958 0-.358.13-.666.38-.93ZM14 14.025c.25-.265.572-.4.958-.4.358 0 .665.135.93.4s.4.58.4.93c0 .387-.135.701-.4.96-.265.257-.58.378-.93.378-.386 0-.701-.121-.959-.379-.25-.25-.379-.572-.379-.959 0-.357.129-.665.38-.93ZM16.374 21.732c.25-.265.573-.401.959-.401.358 0 .665.136.93.4.265.265.4.58.4.93 0 .387-.135.702-.4.96-.265.257-.58.379-.93.379-.386 0-.701-.122-.959-.38-.25-.25-.379-.572-.379-.958 0-.358.129-.666.38-.93ZM21.71 5.732c.251-.265.573-.401.96-.401.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.702-.122-.96-.38-.25-.25-.378-.572-.378-.958 0-.358.128-.666.379-.93ZM21.71 16.4c.251-.264.573-.4.96-.4.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.702-.122-.96-.38-.25-.25-.378-.572-.378-.958 0-.358.128-.666.379-.93ZM.38 5.732c.25-.265.571-.401.958-.401.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.701-.122-.959-.38C.13 7.37 0 7.049 0 6.663c0-.358.129-.666.38-.93ZM.38 9.288c.25-.265.571-.4.958-.4.357 0 .665.135.93.4.264.265.4.58.4.93 0 .387-.136.701-.4.96-.265.257-.58.378-.93.378-.387 0-.701-.121-.959-.379-.25-.25-.379-.572-.379-.959 0-.358.129-.665.38-.93ZM.38 12.844c.25-.264.571-.4.958-.4.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.701-.122-.959-.38-.25-.25-.379-.572-.379-.958 0-.358.129-.666.38-.93ZM21.71 9.288c.251-.265.573-.4.96-.4.357 0 .665.135.93.4.264.265.4.58.4.93 0 .387-.136.701-.4.96-.265.257-.58.378-.93.378-.387 0-.702-.121-.96-.379-.25-.25-.378-.572-.378-.959 0-.358.128-.665.379-.93ZM21.71 12.844c.251-.264.573-.4.96-.4.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.702-.122-.96-.38-.25-.25-.378-.572-.378-.958 0-.358.128-.666.379-.93ZM.38 16.4c.25-.264.571-.4.958-.4.357 0 .665.136.93.4.264.265.4.58.4.93 0 .387-.136.702-.4.96-.265.257-.58.379-.93.379-.387 0-.701-.122-.959-.38-.25-.25-.379-.572-.379-.958 0-.358.129-.666.38-.93Z"
      />
    </svg>
  )
}
