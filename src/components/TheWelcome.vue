<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>About Us</template>
    GoMentor is a trademark of Zhuimeng Cloud UK Ltd. It is a platform created for individual and
    business customers. We have a team of experts with years of experience in their respective
    fields who are dedicated to providing you with the best advice and support to help you reach
    your goals. Our services include education advice, career development, mental health support,
    sales strategies, marketing, branding, and company construction. We are committed to helping you
    achieve success.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Our Services</template>
    GoMentor is a platform that offers expert advisory services for individuals and businesses. Our
    services include education advice, career development, mental health support, sales strategies,
    marketing, branding, and company construction. Our team of professionals are dedicated to
    providing you with the best advice and support to help you reach your goals.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Our Experts</template>
    Our team of experts have years of experience in their respective fields and are dedicated to
    helping you achieve your goals. Whether you need advice on your career, education, mental
    health, sales strategies, marketing, branding, or company construction, our experts are here to
    help.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Our Clients</template>

    We have helped numerous individuals and businesses achieve their goals. Our clients come from
    various industries and backgrounds and we are proud to have been a part of their success
    stories.
  </WelcomeItem>
</template>
