import React from "react";

export default function Message() {
  return (
    <div>
      <div className="pl-2 pt-2 pr-2">
        <div class="chat chat-start">
          <div class="chat-header">
            Obi-Wan Kenobi
            <time class="text-xs opacity-50">2 hours ago</time>
          </div>
          <div class="chat-bubble">You were the Chosen One!</div>
          <div class="chat-footer opacity-50">Seen</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-header">
            Obi-Wan Kenobi
            <time class="text-xs opacity-50">2 hour ago</time>
          </div>
          <div class="chat-bubble">I loved you.</div>
          <div class="chat-footer opacity-50">Delivered</div>
        </div>
      </div>
    </div>
  );
}
