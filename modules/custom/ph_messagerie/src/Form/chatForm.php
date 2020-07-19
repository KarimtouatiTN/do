<?php

namespace Drupal\ph_messagerie\Form;

use Drupal\comment\Entity\Comment;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class chatForm extends FormBase {

  /**
   * Returns a unique string identifying the form.
   *
   * The returned ID should be a unique string that can be a valid PHP function
   * name, since it's used in hook implementation names such as
   * hook_form_FORM_ID_alter().
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'ex81_hello_form';
  }

  /**
   * @inheritDoc
   */
  public function buildForm(array $form, FormStateInterface $form_state)
  {
    // Create a select field that will update the contents
    // of the textbox below.
    $form['chat_sender'] = [
      '#type' => 'textfield',
      '#title' => $this->t(''),
    ];



    // Create the submit button.
    $form['submit'] = [
      '#type' => 'button',
      '#value' => $this->t('Submit'),
      '#ajax' => [
        'callback' => '::myAjaxCallback', // don't forget :: when calling a class method.
        'event' => 'click',
//        'progress' => [
//          'type' => 'bar',
//          'message' => $this->t('sending...'),
//        ],
      ]
    ];

    return $form;
    // TODO: Implement buildForm() method.
  }


  public function myAjaxCallback(array &$form, FormStateInterface $form_state) {
    if ($selectedValue = $form_state->getValue('chat_sender')) {
      $senderId =\Drupal::currentUser()->id();
      $values = [
        'entity_type' => 'node',            // required.
        'entity_id'   => 16,                // required.
        'field_name'  => 'field_chat_messages',         // required.
        'uid' => $senderId,                         // required.
        'comment_type' => 'chat_messages',        // required.
        'subject' => '',  // required.
        'field_message_body' => $selectedValue,            // optional.
        'status' => 1,                      // optional. Defaults to 0.
      ];
      $new_comment=Comment::create($values);
      $new_comment->save();
    }
//    return $form['output'];
  }

  /**
   * @inheritDoc
   */
  public function submitForm(array &$form, FormStateInterface $form_state)
  {
    // Display result.
//    foreach ($form_state->getValues() as $key => $value) {
//      \Drupal::messenger()->addStatus($key . ': ' . $value);
//    }
    // TODO: Implement submitForm() method.
  }
}
