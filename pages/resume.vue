<template>
  <v-container grid-list-md text-xs-center>
    <v-layout
        row
        justify-center
        wrap
    >
        <v-flex xs12 md10>
            <v-card class="spacer">
                <v-card-title flat class="blue lighten-4 black--text"><h1 class="headline">Resume</h1>
                </v-card-title>
                <v-data-table
                    v-bind:headers="headers"
                    :items="items"
                    hide-actions
                    >
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-left">{{ props.item.name }}</td>
                        <td class="text-xs-left">{{ props.item.position }}</td>
                        <td class="text-xs-left">{{ props.item.description }}</td>
                        <td class="text-xs-left">{{ props.item.location }}</td>
                        <td class="text-xs-left">{{ props.item.start }}</td>
                        <td class="text-xs-left">{{ props.item.end }}</td>
                    </template>
                </v-data-table>
            </v-card>
        </v-flex>
        <v-flex md10 lg5>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card class="spacer">
                        <v-card-title flat class="blue lighten-4 black--text">
                            <h2 class="headline">Education</h2>
                            </v-card-title>
                        <v-list two-line>
                            <template v-for="item in schools">
                                <v-subheader v-if="item.header" v-text="item.header" v-bind:key="item.name"></v-subheader>
                                <v-divider v-else-if="item.divider" v-bind:inset="item.inset" v-bind:key="item.name"></v-divider>
                                <v-list-tile avatar v-else v-bind:key="item.name">
                                <v-list-tile-avatar>
                                    <img v-bind:src="item.seal">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.degree"></v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{item.minor}} {{item.honors}} </v-list-tile-sub-title>
                                </v-list-tile-content>
                                </v-list-tile>
                            </template>
                            </v-list>
                    </v-card>
                </v-flex>
                <v-flex d-flex>
                    <v-card>
                        <v-card-title class="blue lighten-4 black--text">
                            <h2>Publications</h2>
                        </v-card-title>
                        <v-list two-line>
                            <template v-for="item in publications">
                                 <v-list-tile avatar v-bind:key="item.name">
                                    <v-list-tile-content v-bind:key="item.name">
                                       <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="item.degree"></v-list-tile-sub-title>
                                        <v-list-tile-sub-title>{{item.minor}} {{item.honors}} </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider v-bind:key="item.name" />
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex md10 lg5 d-flex>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card class="spacer">
                        <v-card-title flat class="blue lighten-4 black--text">
                            <h2>Honors/Awards</h2>
                        </v-card-title>
                        <v-list two-line>
                            <template v-for="item in honors">
                                <v-list-tile avatar v-bind:key="item.name">
                                    <v-list-tile-content v-bind:key="item.name">
                                        <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="item.degree"></v-list-tile-sub-title>
                                        <v-list-tile-sub-title>{{item.minor}} {{item.honors}} </v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider v-bind:key="item.name" />
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
         <v-flex xs12 md10>
            <v-layout row wrap>
                <v-flex d-flex>
                    <v-card class="spacer">
                        <v-card-title class="grey lighten-3">
                            <h2>Links</h2>
                        </v-card-title>
                        <v-list two-line>
                            <template>
                                <v-list-tile href="/documents/PIR_Resume_March2018.pdf" target="_blank">
                                    <v-list-tile-content>
                                            <v-list-tile-title>Resume</v-list-tile-title>
                                            <v-list-tile-sub-title>(pdf in new window)</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-divider></v-divider>
                                <v-list-tile href="/documents/pirCV.doc" target="_blank">
                                    <v-list-tile-content>
                                        <v-list-tile-title>CV</v-list-tile-title>
                                        <v-list-tile-sub-title>(downloads word document)</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    head: {
      title: 'Resume 📑'
    },
    data () {
      return {
        headers: [
          { text: 'Company', align: 'left', sortable: false, value: 'name' },
          { text: 'Position', value: 'position', align: 'left', sortable: false },
          { text: 'Description', value: 'description', align: 'left', sortable: false },
          { text: 'Location', value: 'location', align: 'left', sortable: false },
          { text: 'Start', value: 'start', align: 'left', sortable: false },
          { text: 'End', value: 'end', align: 'left', sortable: false }
        ],
        schools: [
          {
            name: 'Georgia Institute of Technology – 2018',
            degree: 'Master of Science in Human-Computer Interaction',
            seal: '/img/gtseal.png'
          },
          { divider: true, inset: true },
          {
            name: 'Reinhardt University – 2014',
            degree: 'Bachelor of Arts in Graphic Communications',
            minor: 'Minor Digital Art –',
            honors: 'Magnum Cum Laude',
            seal: '/img/ru.gif'
          }
        ],
        honors: [
          {
            name: 'Marta Hackathon Runner-Up (4th)',
            degree: 'Marta Hackaton Fall 2017, 400 participants'
          },
          {
            name: 'Alpha Chi Honors Society',
            degree: 'Reinhardt University 2013'
          },
          {
            name: 'Lamda Pi Eta Communications Honor Society',
            degree: 'Reinhardt University 2013'
          },
          {
            name: 'Eagle Scout, Boy Scouts of America',
            degree: '2009'
          }
        ],
        publications: [
          {
            name: '"The Unity Engine as an Extensible Platform:',
            degree: 'Findings from the System for Wearable Navigation"',
            minor: 'ICT Accessibility Testing Symposium 2017'
          }
        ],
        items: [
          {
            value: false,
            name: 'Sonification Lab (GIT School of Psychology)',
            position: 'Researcher',
            description: 'Ongoing grant with Facebook gathering insights into efficacy and accessibility of reactions. Assisting and leading focus groups, documentation and data analysis, and designing prototypes.',
            location: 'Atlanta, GA',
            start: 'March 2018',
            end: '(current)'
          },
          {
            value: false,
            name: 'Lucena Research',
            position: 'UX / Marketing',
            description: 'Design and graphics for digital materials. Managed and increased website exposure by 1166.67% (2k monthly). Led team for design and creation of front-end for Nasdaq intranet portal.',
            location: 'Atlanta, GA',
            start: 'August 2017',
            end: '(current)'
          },
          {
            value: false,
            name: 'AMAC Accessibility (Georgia Institute of Technology)',
            position: 'Student ICT Accessibility Auditor / Developer',
            description: 'Provided programmatic and usability accessibility audits, remediation, and education for universities, government organizations, and private charities.',
            location: 'Atlanta, GA',
            start: 'January 2017',
            end: 'August 2017'
          },
          {
            value: false,
            name: 'City Publications',
            position: 'Web / Graphic Design & Advertising',
            description: 'Redesigned corporate website, created email and print advertisements, and marketing materials for franchises throughout the US.',
            location: 'Vinings, GA',
            start: 'August 2014',
            end: 'August 2016'
          },
          {
            value: false,
            name: 'Strategies Group (Sage subsidiary)',
            position: 'Marketing / Design Intern',
            description: 'Created marketing materials and managed social media and email blasts and social media accounts.',
            location: 'Suwanee, GA',
            start: 'April 2014',
            end: 'August 2014'
          },
          {
            value: false,
            name: 'Oasis Consulting Services',
            position: 'Geotechnical Laboratory Assitant',
            description: 'Provided scientific analysis on construction materials. Maintained laboratory equipment. Open and closed facilities.',
            location: 'Canton, GA',
            start: 'January 2011',
            end: 'August 2014'
          },
          {
            value: false,
            name: 'Reinhardt University',
            position: 'Student Resident Assistant',
            description: 'Provided assistance and communication for over 40 students. Cooperated with public safety to maintain campus security. Arranged  monthly student activities.',
            location: 'Waleska, GA',
            start: 'August 2011',
            end: 'December 2013'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.spacer {
    margin-top: 2em;
}
.card {
    border-radius: 16px;
}
li >>> a {
    text-decoration: none;
    color:rgb(0, 80, 150)!important;
}
</style>
