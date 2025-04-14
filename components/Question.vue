<template>
    <div>
        <p style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">{{question}}</p>
        <template v-for="answer in answers" v-if="answers !== null">
            <a @click="isRevealed=true" class="primary-button" :class="(isRevealed == true && rightAnswer == answer) ? 'true' : (isRevealed == true && rightAnswer != answer) ? 'false' : 'quiz'">{{answer}}</a> 
            <br>
        </template>
        <br><br>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isRevealed: this.revealed,
        };
    },
    props: {
      question: {type: String},
      answers: {type: Array},
      rightAnswer: {type: String},
      revealed: {type: Boolean}
    },
    watch: { 
        revealed: {
            immediate: true, 
            deep: true,
            handler (newVal, oldVal) { 
              this.isRevealed = newVal;
            }
        }
      }
}
</script>