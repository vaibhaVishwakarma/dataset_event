import type { FollowUpOption } from '../types';

export const followUpQuestions: Record<string, FollowUpOption[]> = {
  "service": [
    { "id": "NIL", "text": "What plans are offered in my area" },
    { "id": "NIL", "text": "Any plan under ₹1500" },
    { "id": "NIL", "text": "What is installation price" },
    { "id": "NIL", "text": "How to upgrade from current plan" }
  ],
  "technical": [
    { "id": "NIL", "text": "No internet connection" },
    { "id": "NIL", "text": "Why is my internet slow" },
    { "id": "NIL", "text": "Router light is RED" }
  ],
  "hardware": [
    { "id": "NIL", "text": "How to reset WiFi" },
    { "id": "NIL", "text": "Router replacement" }
  ],
  "plan": [
    { "id": "NIL", "text": "Password reset" },
    { "id": "NIL", "text": "View current plan details" },
    { "id": "NIL", "text": "Check usage statistics" },
    { "id": "NIL", "text": "Update Email" },
    { "id": "NIL", "text": "Payment history" }
  ],
  "terms": [
    { "id": "NIL", "text": "Termination fee" },
    { "id": "NIL", "text": "Privacy policy" },
    { "id": "NIL", "text": "Cancellation policy" },
    { "id": "NIL", "text": "Data usage policy" }
  ],
  "team": [
    { "id": "NIL", "text": "Schedule a call" },
    { "id": "NIL", "text": "Live chat support" },
    { "id": "NIL", "text": "On-site visit request" }
  ]
}
;