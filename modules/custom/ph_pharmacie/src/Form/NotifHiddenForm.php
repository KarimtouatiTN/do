<?php

namespace Drupal\ph_pharmacie\Form;

use Drupal\comment\Entity\Comment;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class notifHiddenForm extends FormBase
{

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
  public function getFormId()
  {
    return 'notif_hidden_form';
  }

  /**
   * @inheritDoc
   */
  public function buildForm(array $form, FormStateInterface $form_state)
  {

    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $storage = \Drupal::entityTypeManager()->getStorage('profile');
    $profile = $storage->loadByUser($user, 'pharmacie');
    // Create a select field that will update the contents
    // of the textbox below.
    $form['chat_sender'] = [
      '#type' => 'textfield',
      "#id"=>'global-notif',
//      "#access"=>false,
      '#title' => $this->t('global'),
    ];


    $form['output'] = [
      '#type' => 'textfield',
      "#id"=>'dernier-acces',
      '#title' => $this->t('dernier accés'),
//      "#access"=>false,
      '#value'=>$profile->get('field_nb_notif_dernier')->getValue()[0]['value'],
      '#prefix' => '<div id="edit-nb">',
      '#suffix' => '</div>',
    ];

    $form['custom_submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('0'),
      "#id"=>'custom-submit',
      '#ajax' => [
        'callback' => '::myAjaxCallback', // don't forget :: when calling a class method.
        'event' => 'click',
        'wrapper' => 'edit-nb', // This element is updated with this AJAX callback.
        'progress' => [
          'type' => 'throbber',
          'message' => $this->t('Verifying entry...'),
        ],

      ]
    ];

    return $form;
    // TODO: Implement buildForm() method.
  }


  public function myAjaxCallback(array &$form, FormStateInterface $form_state)
  {
    $form['output']['#value']=$form_state->getValue('chat_sender');
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $storage = \Drupal::entityTypeManager()->getStorage('profile');
    $profile = $storage->loadByUser($user, 'pharmacie');
    $profile->set('field_nb_notif_dernier',$form_state->getValue('chat_sender'));
    $profile->save();
    return $form['output'];
  }


  public function submitForm(array &$form, FormStateInterface $form_state)
  {
    // TODO: Implement submitForm() method.
  }
}
